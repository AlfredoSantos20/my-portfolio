import React from 'react';

const Button = ({
  href = '#',
  text = 'Click Me',
  icon = null,
  download = false,
  variant = 'solid',
  onClick,
  disabled = false,
  className = '', // New prop
}) => {
  const baseStyle =
    'px-6 py-3 text-sm sm:text-base rounded-md font-semibold transition inline-flex items-center justify-center gap-2';
  const solidStyle = 'bg-teal-600 text-white shadow hover:bg-teal-700';
  const outlineStyle = 'border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white';
  const disabledStyle = 'opacity-50 cursor-not-allowed';

  const combinedStyle = `${baseStyle} ${
    variant === 'solid' ? solidStyle : outlineStyle
  } ${disabled ? disabledStyle : ''} ${className}`;

  return (
    <a
      href={disabled ? undefined : href}
      className={combinedStyle}
      onClick={(e) => {
        if (disabled) e.preventDefault();
        onClick?.(e);
      }}
      download={download}
    >
      {icon && <span className="text-sm">{icon}</span>}
      {text}
    </a>
  );
};

export default Button;
