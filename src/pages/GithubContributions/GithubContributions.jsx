import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const GITHUB_USERNAME = 'AlfredoSantos20';

// Public contributions data (same numbers as the GitHub profile graph), no token needed
const API_URL = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`;

const LAST_YEAR = 'last';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// GitHub's 5 levels — light mode = GitHub greens, dark mode tuned to the site's navy
const LEVEL_CLASSES = [
  'bg-[#ebedf0] dark:bg-[#11203a]',
  'bg-[#9be9a8] dark:bg-[#0e4429]',
  'bg-[#40c463] dark:bg-[#006d32]',
  'bg-[#30a14e] dark:bg-[#26a641]',
  'bg-[#216e39] dark:bg-[#39d353]',
];

const toLocalDate = (value) => {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day);
};

const todayKey = () => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
};

/* days -> columns of 7 (Sun..Sat), padded so the first column starts on Sunday */
const buildWeeks = (days) => {
  if (days.length === 0) return [];

  const padded = [...Array(toLocalDate(days[0].date).getDay()).fill(null), ...days];
  const weeks = [];

  for (let index = 0; index < padded.length; index += 7) {
    weeks.push(padded.slice(index, index + 7));
  }

  return weeks;
};

/* month label above the first column of each month (skipped if too close to the previous one) */
const buildMonthLabels = (weeks) => {
  const labels = [];
  let lastMonth = null;
  let lastIndex = -10;

  weeks.forEach((week, index) => {
    const firstDay = week.find(Boolean);
    if (!firstDay) return;

    const month = toLocalDate(firstDay.date).getMonth();

    if (month !== lastMonth) {
      if (index - lastIndex >= 3) {
        labels.push({ index, label: MONTHS[month] });
        lastIndex = index;
      }
      lastMonth = month;
    }
  });

  return labels;
};

const formatTooltip = (day) => {
  const date = toLocalDate(day.date);
  const label = `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

  if (day.count === 0) return `No contributions on ${label}`;

  return `${day.count} contribution${day.count === 1 ? '' : 's'} on ${label}`;
};

// square size / gap (px) — slightly smaller on phones so more weeks fit on screen
const SIZES = {
  desktop: { cell: 12, gap: 3 },
  mobile: { cell: 10, gap: 2 },
};

const MOBILE_QUERY = '(max-width: 639px)';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches,
  );

  useEffect(() => {
    const query = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(query.matches);

    update();
    query.addEventListener('change', update);

    return () => query.removeEventListener('change', update);
  }, []);

  return isMobile;
};

const GithubContributions = () => {
  const [selected, setSelected] = useState(LAST_YEAR);
  const [lastYearData, setLastYearData] = useState(null);
  const [allData, setAllData] = useState(null);
  const [error, setError] = useState(false);
  const [tooltip, setTooltip] = useState(null);

  const graphRef = useRef(null);
  const scrollRef = useRef(null);

  const isMobile = useIsMobile();
  const { cell: CELL, gap: GAP } = isMobile ? SIZES.mobile : SIZES.desktop;

  // shows the "swipe" hint only when the graph is wider than the screen
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    let cancelled = false;

    Promise.all([
      fetch(`${API_URL}?y=last`).then((response) => {
        if (!response.ok) throw new Error('last year');
        return response.json();
      }),
      fetch(`${API_URL}?y=all`).then((response) => {
        if (!response.ok) throw new Error('all years');
        return response.json();
      }),
    ])
      .then(([last, all]) => {
        if (cancelled) return;
        setLastYearData(last);
        setAllData(all);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const years = useMemo(
    () =>
      allData
        ? Object.keys(allData.total ?? {})
            .filter((year) => /^\d{4}$/.test(year))
            .sort((a, b) => Number(b) - Number(a))
        : [],
    [allData],
  );

  const { days, total } = useMemo(() => {
    if (selected === LAST_YEAR) {
      return {
        days: lastYearData?.contributions ?? [],
        total: lastYearData?.total?.lastYear ?? 0,
      };
    }

    const today = todayKey();

    return {
      days: (allData?.contributions ?? [])
        .filter((day) => day.date.startsWith(`${selected}-`))
        .sort((a, b) => a.date.localeCompare(b.date))
        // like GitHub: no squares for days that haven't happened yet
        .map((day) => (day.date > today ? { ...day, future: true } : day)),
      total: allData?.total?.[selected] ?? 0,
    };
  }, [selected, lastYearData, allData]);

  const weeks = useMemo(() => buildWeeks(days), [days]);
  const monthLabels = useMemo(() => buildMonthLabels(weeks), [weeks]);

  const isLoading = !error && (!lastYearData || !allData);

  // newest weeks on the right are the interesting part — start scrolled there on small screens
  useEffect(() => {
    const element = scrollRef.current;

    if (element) {
      element.scrollLeft = element.scrollWidth;
      setCanScroll(element.scrollWidth > element.clientWidth + 1);
    }
  }, [weeks, CELL]);

  const showTooltip = (event, day) => {
    if (!graphRef.current) return;

    const cell = event.currentTarget.getBoundingClientRect();
    const graph = graphRef.current.getBoundingClientRect();

    const margin = 72; // ~half the tooltip width
    const center = cell.left - graph.left + cell.width / 2;

    setTooltip({
      text: formatTooltip(day),
      left: Math.min(Math.max(center, margin), Math.max(graph.width - margin, margin)),
      top: cell.top - graph.top,
    });
  };

  const heading =
    selected === LAST_YEAR
      ? `${total.toLocaleString()} contributions in the last year`
      : `${total.toLocaleString()} contributions in ${selected}`;

  const gridWidth = weeks.length * (CELL + GAP);

  const yearButton = (value, label) => {
    const active = selected === value;

    return (
      <button
        key={value}
        type="button"
        onClick={() => {
          setSelected(value);
          setTooltip(null);
        }}
        aria-pressed={active}
        className={`shrink-0 whitespace-nowrap rounded-lg px-2 py-2 text-center text-xs sm:px-4 sm:text-sm lg:text-left font-medium font-['Poppins'] transition-all duration-200 ${
          active
            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-[#06B6D4] dark:to-[#3B82F6] text-white shadow-md shadow-cyan-500/20'
            : 'text-gray-500 dark:text-[#A8B5C7] hover:bg-gray-100 dark:hover:bg-[#0A1728] hover:text-gray-900 dark:hover:text-white'
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="w-full px-0 sm:px-6 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 dark:from-[#06B6D4] dark:via-[#3B82F6] dark:to-[#06B6D4] bg-clip-text text-transparent font-['Poppins']">
          GitHub Contributions
        </h2>
        <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-[#06B6D4] dark:to-[#3B82F6] mx-auto mt-3 rounded-full"></div>
        <p className="text-center text-gray-600 dark:text-[#A8B5C7] mt-4 text-base sm:text-lg font-medium max-w-2xl mx-auto font-['Poppins']">
          My coding activity, straight from GitHub.
        </p>
      </div>

      <div className="max-w-6xl mx-auto rounded-2xl ring-2 ring-gray-200 dark:ring-[#183653] bg-white/80 dark:bg-[#06101E] shadow-md shadow-gray-200/40 dark:shadow-[#183653]/40 p-3 sm:p-6">
        {/* HEADER */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-sm sm:text-lg font-semibold text-gray-800 dark:text-white font-['Poppins']">
            {isLoading ? (
              <span className="inline-block h-5 w-64 animate-pulse rounded bg-gray-200 dark:bg-[#11203a] align-middle" />
            ) : error ? (
              'Contributions'
            ) : (
              heading
            )}
          </h3>

          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-[#06B6D4] dark:to-[#3B82F6] px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-semibold text-white shadow-md transition-transform duration-200 hover:scale-105 font-['Poppins']"
          >
            <FaGithub size={isMobile ? 14 : 16} />
            View on GitHub
          </a>
        </div>

        <div className="flex flex-col-reverse gap-4 lg:flex-row lg:items-start">
          {/* GRAPH */}
          <div className="min-w-0 flex-1 rounded-xl border border-gray-200 dark:border-[#183653] bg-white dark:bg-[#030B18] p-2.5 sm:p-4">
            {error ? (
              <div className="py-10 text-center text-sm text-gray-500 dark:text-[#A8B5C7] font-['Poppins']">
                Couldn't load the contribution graph right now.{' '}
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-cyan-600 dark:text-[#06B6D4] hover:underline"
                >
                  See it on GitHub
                </a>
              </div>
            ) : (
              <div ref={graphRef} className="relative">
                <div
                  ref={scrollRef}
                  onScroll={() => setTooltip(null)}
                  className="overflow-x-auto pb-1 [scrollbar-width:thin]"
                >
                  <div className="flex w-max mx-auto">
                    {/* weekday labels */}
                    <div
                      className="sticky left-0 z-[1] flex flex-col bg-white dark:bg-[#030B18] pr-1.5 sm:pr-2 pt-[20px] text-[10px] sm:text-[11px] text-gray-500 dark:text-[#A8B5C7] font-['Poppins']"
                      style={{ gap: GAP }}
                    >
                      {WEEKDAYS.map((weekday, index) => (
                        <span
                          key={weekday}
                          className="flex items-center leading-none"
                          style={{ height: CELL }}
                        >
                          {index % 2 === 1 ? weekday : ''}
                        </span>
                      ))}
                    </div>

                    <div>
                      {/* month labels */}
                      <div
                        className="relative mb-2 h-[12px] text-[10px] sm:text-[11px] text-gray-500 dark:text-[#A8B5C7] font-['Poppins']"
                        style={{ width: isLoading ? 53 * (CELL + GAP) : gridWidth }}
                      >
                        {monthLabels.map(({ index, label }) => (
                          <span
                            key={`${label}-${index}`}
                            className="absolute top-0 leading-none"
                            style={{ left: index * (CELL + GAP) }}
                          >
                            {label}
                          </span>
                        ))}
                      </div>

                      {/* squares */}
                      <div className="flex" style={{ gap: GAP }}>
                        {(isLoading ? Array.from({ length: 53 }, () => Array(7).fill('loading')) : weeks).map(
                          (week, weekIndex) => (
                            <div key={weekIndex} className="flex flex-col" style={{ gap: GAP }}>
                              {Array.from({ length: 7 }, (_, dayIndex) => {
                                const day = week[dayIndex];

                                if (day === 'loading') {
                                  return (
                                    <span
                                      key={dayIndex}
                                      className="animate-pulse rounded-[3px] bg-gray-200 dark:bg-[#11203a]"
                                      style={{ width: CELL, height: CELL }}
                                    />
                                  );
                                }

                                if (!day || day.future) {
                                  return <span key={dayIndex} style={{ width: CELL, height: CELL }} />;
                                }

                                return (
                                  <span
                                    key={day.date}
                                    role="img"
                                    aria-label={formatTooltip(day)}
                                    onMouseEnter={(event) => showTooltip(event, day)}
                                    onMouseLeave={() => setTooltip(null)}
                                    onClick={(event) => showTooltip(event, day)}
                                    className={`rounded-[3px] outline-1 -outline-offset-1 outline-black/5 dark:outline-white/5 transition-transform duration-150 hover:scale-125 hover:ring-2 hover:ring-cyan-400/70 ${LEVEL_CLASSES[day.level] ?? LEVEL_CLASSES[0]}`}
                                    style={{ width: CELL, height: CELL }}
                                  />
                                );
                              })}
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* hover tooltip */}
                {tooltip && (
                  <div
                    className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md bg-gray-900 dark:bg-[#183653] px-2.5 py-1.5 text-[11px] font-medium text-white shadow-lg font-['Poppins']"
                    style={{ left: tooltip.left, top: tooltip.top - 6 }}
                  >
                    {tooltip.text}
                  </div>
                )}

                {canScroll && (
                  <p className="mt-1.5 text-[10px] text-gray-400 dark:text-[#6B7A90] font-['Poppins'] sm:hidden">
                    ← Swipe to see earlier months · tap a square for details
                  </p>
                )}

                {/* footer */}
                <div className="mt-3 flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between text-[10px] sm:text-[11px] text-gray-500 dark:text-[#A8B5C7] font-['Poppins']">
                  <a
                    href="https://docs.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-600 dark:hover:text-[#06B6D4] hover:underline"
                  >
                    Learn how GitHub counts contributions
                  </a>

                  <div className="flex items-center gap-1.5">
                    <span>Less</span>
                    {LEVEL_CLASSES.map((levelClass, level) => (
                      <span
                        key={level}
                        className={`rounded-[3px] ${levelClass}`}
                        style={{ width: CELL, height: CELL }}
                      />
                    ))}
                    <span>More</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* YEAR FILTER — row on small screens, column on the right on large ones */}
          {!error && (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(58px,1fr))] gap-1.5 sm:flex sm:flex-wrap sm:gap-2 lg:w-32 lg:flex-col lg:flex-nowrap">
              {isLoading
                ? Array.from({ length: 4 }, (_, index) => (
                    <span
                      key={index}
                      className="h-9 w-full sm:w-24 shrink-0 animate-pulse rounded-lg bg-gray-200 dark:bg-[#11203a] lg:w-full"
                    />
                  ))
                : [yearButton(LAST_YEAR, 'Last year'), ...years.map((year) => yearButton(year, year))]}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GithubContributions;
