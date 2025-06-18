import React from 'react';

const Button = ({
  href = '#',
  text = 'Click Me',
  icon = null,
  download = false,
  variant = 'solid',
  onClick,
  disabled = false,
  className = '',
}) => {
  const baseStyle =
    'px-6 py-3 text-sm sm:text-base rounded-md font-semibold transition inline-flex items-center justify-center gap-2';
  const solidStyle = 'text-white shadow'; // removed hardcoded bg
  const outlineStyle =
    'border border-cyan-400 text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-white';
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
