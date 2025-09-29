import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { useDarkMode } from "../../hooks/useDarkMode";

const switchVariants = cva(
  "inline-flex items-center justify-center rounded-full transition focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
  {
    variants: {
      variant: {
        primary: "bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-400 dark:text-gray-900 dark:hover:bg-primary-500",
        secondary: "bg-secondary-600 text-white hover:bg-secondary-700 dark:bg-secondary-400 dark:text-gray-900 dark:hover:bg-secondary-500",
        ghost: "bg-transparent hover:bg-primary-100 dark:hover:bg-primary-900 text-primary-600 dark:text-primary-300",
      },
      size: {
        sm: "w-8 h-8 text-base",
        md: "w-10 h-10 text-lg",
        lg: "w-12 h-12 text-xl",
      },
      iconStyle: {
        filled: "",
        outline: "",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "md",
      iconStyle: "filled",
    },
  }
);

export interface NightModeSwitchProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof switchVariants> {
  ariaLabel?: string;
}

export const NightModeSwitch = React.forwardRef<HTMLButtonElement, NightModeSwitchProps>(
  (
    {
      className,
      variant,
      size,
      iconStyle,
      ariaLabel = "Toggle dark mode",
      ...props
    },
    ref
  ) => {
    const { isDarkMode, toggle } = useDarkMode();

    return (
      <button
        type="button"
        ref={ref}
        aria-label={ariaLabel}
        aria-pressed={isDarkMode}
        className={cn(switchVariants({ variant, size, iconStyle, className }))}
        onClick={toggle}
        {...props}
      >
        <span className="sr-only">{ariaLabel}</span>
        {isDarkMode ? (
          // Moon icon (filled)
          iconStyle === "outline" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
            </svg>
          )
        ) : iconStyle === "outline" ? (
          // Sun icon (outline)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="5" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            />
          </svg>
        ) : (
          // Sun icon (filled)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="5" />
            <g>
              <rect x="11" y="1" width="2" height="3" rx="1" />
              <rect x="11" y="20" width="2" height="3" rx="1" />
              <rect x="4.22" y="4.22" width="2" height="3" rx="1" transform="rotate(-45 5.22 5.22)" />
              <rect x="17.78" y="17.78" width="2" height="3" rx="1" transform="rotate(-45 18.78 18.78)" />
              <rect x="1" y="11" width="3" height="2" rx="1" />
              <rect x="20" y="11" width="3" height="2" rx="1" />
              <rect x="4.22" y="16.78" width="2" height="3" rx="1" transform="rotate(45 5.22 18.28)" />
              <rect x="17.78" y="6.22" width="2" height="3" rx="1" transform="rotate(45 18.78 7.72)" />
            </g>
          </svg>
        )}
      </button>
    );
  }
);

NightModeSwitch.displayName = "NightModeSwitch";