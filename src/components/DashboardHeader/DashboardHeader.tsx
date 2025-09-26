import * as React from "react";
import { Search, Bell, Settings, Menu } from "lucide-react";
import { cn } from "../../utils/cn";
import { Input } from "../Input";
import { Button } from "../Button";
import { Avatar, AvatarImage, AvatarFallback } from "../Avatar";
import { Badge } from "../Badge";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface DashboardHeaderProps {
  className?: string;
  breadcrumbs?: BreadcrumbItem[];
  onMenuToggle?: () => void;
  sidebarCollapsed?: boolean;
  showSearch?: boolean;
  searchPlaceholder?: string;
  onSearchChange?: (value: string) => void;
  style?: React.CSSProperties;

  // New flexible API
  showBreadcrumbs?: boolean; // default true
  showNotifications?: boolean; // default true
  showSettings?: boolean; // default true
  showProfile?: boolean; // default true
  showMenuButton?: boolean; // default true

  leftSlot?: React.ReactNode;
  centerSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
}

import { useBreakpoint } from "../../hooks/useBreakpoint";

const DashboardHeader = React.forwardRef<HTMLDivElement, DashboardHeaderProps>(
  ({
    className,
    breadcrumbs = [{ label: "Dashboard" }],
    onMenuToggle,
    sidebarCollapsed = false,
    showSearch = true,
    searchPlaceholder = "Search...",
    onSearchChange,
    showBreadcrumbs = true,
    showNotifications = true,
    showSettings = true,
    showProfile = true,
    showMenuButton = true,
    leftSlot,
    centerSlot,
    rightSlot,
    ...props
  }, ref) => {
    const [searchValue, setSearchValue] = React.useState("");
    const { isAbove } = useBreakpoint();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchValue(value);
      onSearchChange?.(value);
    };

    return (
      <header
        ref={ref}
        className={cn(
          "z-30 bg-white border-b border-gray-200 transition-all duration-300",
          className
        )}
        style={props.style}
        {...props}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            {/* Custom left slot */}
            {leftSlot}

            {/* Mobile Menu Button */}
            {showMenuButton && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onMenuToggle}
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            )}

            {/* Breadcrumbs */}
            {showBreadcrumbs && isAbove('md') && (
              <nav className="flex items-center space-x-2 text-sm">
                {breadcrumbs.map((item, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && (
                      <span className="text-gray-400">/</span>
                    )}
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-gray-900 font-medium">
                        {item.label}
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </nav>
            )}
          </div>

          {/* Center Section - Search or custom center slot */}
          {centerSlot ? (
            <div className="flex-1 flex justify-center">{centerSlot}</div>
          ) : (
            showSearch && (
              <div className="flex-1 max-w-md mx-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder={searchPlaceholder}
                    value={searchValue}
                    onChange={handleSearchChange}
                    className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
                  />
                </div>
              </div>
            )
          )}

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* Custom right slot */}
            {rightSlot}

            {/* Notifications */}
            {showNotifications && (
              <div className="relative">
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-5 w-5" />
                  <Badge
                    variant="danger"
                    className="absolute -top-1 -right-1 h-5 w-5 text-xs p-0 flex items-center justify-center"
                  >
                    3
                  </Badge>
                </Button>
              </div>
            )}

            {/* Settings */}
            {showSettings && (
              <Button variant="ghost" size="sm">
                <Settings className="h-5 w-5" />
              </Button>
            )}

            {/* User Profile */}
            {showProfile && (
              <div className="flex items-center space-x-3 pl-3 border-l border-gray-200">
                <div className="hidden sm:block text-right">
                  <p className="text-sm font-medium text-gray-900">John Doe</p>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
                <Avatar size="sm">
                  <AvatarImage src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=64" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
);

DashboardHeader.displayName = "DashboardHeader";

export { DashboardHeader, type BreadcrumbItem, type DashboardHeaderProps };