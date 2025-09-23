import * as React from "react";
import { Menu, X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { useBreakpoint } from "../../hooks/useBreakpoint";

const navbarVariants = cva(
  "flex items-center justify-between w-full px-4 py-3 bg-white border-b border-gray-200",
  {
    variants: {
      variant: {
        default: "bg-white border-gray-200",
        dark: "bg-gray-900 border-gray-700 text-white",
        transparent: "bg-transparent border-transparent",
      },
      size: {
        sm: "px-4 py-2",
        md: "px-6 py-3",
        lg: "px-8 py-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface NavbarProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navbarVariants> {
  logo?: React.ReactNode;
  children?: React.ReactNode;
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, variant, size, logo, children, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { currentBreakpoint, isAbove } = useBreakpoint();

    // Close mobile menu if switching to desktop breakpoint
    React.useEffect(() => {
      if (isAbove("md") && isOpen) {
        setIsOpen(false);
      }
    }, [currentBreakpoint, isOpen, isAbove]);

    return (
      <nav
        ref={ref}
        className={cn(navbarVariants({ variant, size }), className)}
        {...props}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          {logo && <div className="flex-shrink-0">{logo}</div>}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            {children}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navbar-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6 text-primary-600" /> : <Menu className="h-6 w-6 text-primary-600" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navbar-menu"
          role="menu"
          aria-label="Mobile navigation"
          tabIndex={-1}
          className={cn(
            "md:hidden fixed inset-x-0 top-full bg-white dark:bg-gray-900 border-b border-primary-100 dark:border-gray-700 shadow-lg z-50 overflow-y-auto max-h-[60vh] transition-all duration-300 ease-in-out",
            isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"
          )}
        >
          <div className="px-4 py-2 space-y-2">
            {children}
          </div>
        </div>
      </nav>
    );
  }
);
Navbar.displayName = "Navbar";

const NavItem = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "text-primary-700 dark:text-primary-200 hover:bg-primary-50 dark:hover:bg-gray-800 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors",
      className
    )}
    {...props}
  />
));
NavItem.displayName = "NavItem";

export { Navbar, NavItem, navbarVariants };