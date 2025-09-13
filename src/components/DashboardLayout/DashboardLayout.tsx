import * as React from "react";
import { cn } from "../../utils/cn";
import { Sidebar, type MenuItem } from "../Sidebar";
import { DashboardHeader, type BreadcrumbItem } from "../DashboardHeader";

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
    ...props 
  }, ref) => {
    const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

    const toggleSidebar = () => {
      setSidebarCollapsed(prev => !prev);
    };

    return (
      <div ref={ref} className={cn("min-h-screen bg-gray-50", className)} {...props}>
        {/* Sidebar */}
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={toggleSidebar}
          menuItems={sidebarMenuItems}
          activeItem={activeSidebarItem}
          onItemClick={onSidebarItemClick}
        />

        {/* Main Content Area */}
        <div className="flex flex-col min-h-screen">
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
              "flex-1 transition-all duration-300 p-6",
              sidebarCollapsed ? "ml-16" : "ml-72"
            )}
          >
            {children}
          </main>
        </div>

        {/* Mobile Overlay */}
        {!sidebarCollapsed && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={toggleSidebar}
          />
        )}
      </div>
    );
  }
);

DashboardLayout.displayName = "DashboardLayout";

export { DashboardLayout };