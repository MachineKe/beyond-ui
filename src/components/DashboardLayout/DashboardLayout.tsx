import * as React from "react";
import { cn } from "../../utils/cn";
import { Sidebar, type MenuItem } from "../Sidebar";
import { DashboardHeader, type BreadcrumbItem } from "../DashboardHeader";
import { useBreakpoint } from "../../hooks/useBreakpoint";

/**
 * DashboardLayoutProps
 * - sidebarTitle: Title text for Sidebar header (default: "Beyond")
 * - sidebarTitleLetter: Letter/initial for Sidebar header (default: "B")
 * - sidebarHeaderClassName: Optional className for SidebarHeader
 *
 * These props are forwarded to Sidebar for dynamic header branding.
 */
interface DashboardLayoutProps {
  children: React.ReactNode;
  className?: string;
  sidebarMenuItems?: MenuItem[];
  activeSidebarItem?: string;
  breadcrumbs?: BreadcrumbItem[];
  onSidebarItemClick?: (itemId: string) => void;
  showSearch?: boolean;
  searchPlaceholder?: string;
  onSearchChange?: (value: string) => void;
  sidebarClassName?: string;
  disableSidebarMargin?: boolean;
  /** Sidebar header title (default: "Beyond") */
  sidebarTitle?: string;
  /** Sidebar header letter (default: "B") */
  sidebarTitleLetter?: string;
  /** Optional className for SidebarHeader */
  sidebarHeaderClassName?: string;
}

const DashboardLayout = React.forwardRef<HTMLDivElement, DashboardLayoutProps>(
  ({
    children,
    className,
    sidebarMenuItems,
    activeSidebarItem,
    breadcrumbs,
    onSidebarItemClick,
    showSearch,
    searchPlaceholder,
    onSearchChange,
    sidebarTitle,
    sidebarTitleLetter,
    sidebarHeaderClassName,
    ...props
  }, ref) => {
    const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
    const { isBelow } = useBreakpoint();

    const toggleSidebar = () => {
      setSidebarCollapsed(prev => !prev);
    };

    // Responsive sidebar: drawer on mobile, fixed on desktop
    return (
      <div ref={ref} className={cn("min-h-screen bg-gray-50 flex flex-col", className)} {...props}>
        <div className="flex flex-1 w-full">
          {/* Sidebar */}
          <Sidebar
            collapsed={sidebarCollapsed}
            onToggle={toggleSidebar}
            menuItems={sidebarMenuItems}
            activeItem={activeSidebarItem}
            onItemClick={onSidebarItemClick}
            className={cn(
              props.sidebarClassName,
              // Hide sidebar on mobile unless open
              isBelow("md") ? (sidebarCollapsed ? "hidden" : "fixed z-40 top-0 left-0 h-full w-64 bg-white shadow-lg") : "relative w-72"
            )}
            title={sidebarTitle}
            titleLetter={sidebarTitleLetter}
            headerClassName={sidebarHeaderClassName}
          />

          {/* Main Content Area */}
          <div className="flex flex-col flex-1 min-h-screen">
            {/* Header */}
            <DashboardHeader
              sidebarCollapsed={sidebarCollapsed}
              onMenuToggle={toggleSidebar}
              breadcrumbs={breadcrumbs}
              showSearch={showSearch}
              searchPlaceholder={searchPlaceholder}
              onSearchChange={onSearchChange}
            />

            {/* Main Content */}
            <main
              className={cn(
                "flex-1 transition-all duration-300 p-4 md:p-6",
                props.disableSidebarMargin
                  ? ""
                  : isBelow("md")
                    ? "ml-0"
                    : (sidebarCollapsed ? "ml-16" : "ml-72")
              )}
            >
              {children}
            </main>
          </div>
        </div>

        {/* Mobile Overlay */}
        {isBelow("md") && !sidebarCollapsed && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={toggleSidebar}
          />
        )}
      </div>
    );
  }
);

DashboardLayout.displayName = "DashboardLayout";

export { DashboardLayout };