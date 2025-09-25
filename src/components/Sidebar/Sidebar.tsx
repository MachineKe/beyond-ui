import * as React from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown, 
  Home, 
  BarChart3, 
  Users, 
  Settings, 
  FileText, 
  Calendar, 
  Mail, 
  Bell,
  LogOut,
  User
} from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { Avatar, AvatarImage, AvatarFallback } from "../Avatar";
import { Badge } from "../Badge";
import { ProfileButton } from "./ProfileButton";
import { LogoutButton } from "./LogoutButton";

const sidebarVariants = cva(
  "fixed left-0 top-0 z-40 h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out",
  {
    variants: {
      collapsed: {
        false: "w-72",
        true: "w-16",
      },
    },
    defaultVariants: {
      collapsed: false,
    },
  }
);

const menuItemVariants = cva(
  "flex items-center w-full px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group",
  {
    variants: {
      active: {
        true: "bg-primary-50 text-primary-700 border-r-2 border-primary-600",
        false: "text-gray-700 hover:bg-gray-50 hover:text-gray-900",
      },
      collapsed: {
        true: "justify-center px-2",
        false: "justify-start",
      },
    },
    defaultVariants: {
      active: false,
      collapsed: false,
    },
  }
);

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href?: string;
  badge?: string;
  children?: MenuItem[];
}

import { SidebarHeader } from "./SidebarHeader";

export interface SidebarProfileSectionProps {
  avatarUrl?: string;
  name?: string;
  email?: string;
  avatarFallback?: string;
  collapsedAvatarSize?: "sm" | "md" | "lg";
  expandedAvatarSize?: "sm" | "md" | "lg";
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

interface SidebarProps extends VariantProps<typeof sidebarVariants> {
  className?: string;
  onToggle?: () => void;
  menuItems?: MenuItem[];
  activeItem?: string;
  onItemClick?: (itemId: string) => void;
  /** Sidebar header title (default: "Beyond") */
  title?: string;
  /** Sidebar header letter (default: "B") */
  titleLetter?: string;
  /** Optional className for SidebarHeader */
  headerClassName?: string;
  style?: React.CSSProperties;
  /** Props for ProfileButton (stateless usage) */
  profileButtonProps?: import("./ProfileButton").ProfileButtonProps;
  /** Props for LogoutButton (stateless usage) */
  logoutButtonProps?: import("./LogoutButton").LogoutButtonProps;
  /** Dynamic profile section props */
  profileSectionProps?: SidebarProfileSectionProps;
}

const defaultMenuItems: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <Home className="h-5 w-5" />,
    href: "/dashboard",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: <BarChart3 className="h-5 w-5" />,
    href: "/analytics",
    badge: "New",
  },
  {
    id: "users",
    label: "Users",
    icon: <Users className="h-5 w-5" />,
    children: [
      { id: "all-users", label: "All Users", icon: <Users className="h-4 w-4" /> },
      { id: "user-roles", label: "User Roles", icon: <Settings className="h-4 w-4" /> },
    ],
  },
  {
    id: "reports",
    label: "Reports",
    icon: <FileText className="h-5 w-5" />,
    href: "/reports",
  },
  {
    id: "calendar",
    label: "Calendar",
    icon: <Calendar className="h-5 w-5" />,
    href: "/calendar",
  },
  {
    id: "messages",
    label: "Messages",
    icon: <Mail className="h-5 w-5" />,
    href: "/messages",
    badge: "3",
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: <Bell className="h-5 w-5" />,
    href: "/notifications",
  },
  {
    id: "settings",
    label: "Settings",
    icon: <Settings className="h-5 w-5" />,
    href: "/settings",
  },
];

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({
    className,
    collapsed = false,
    onToggle,
    menuItems = defaultMenuItems,
    activeItem = "dashboard",
    onItemClick,
    title = "Beyond",
    titleLetter = "B",
    headerClassName,
    profileButtonProps,
    logoutButtonProps,
    profileSectionProps,
    ...props
  }, ref) => {
    const [expandedItems, setExpandedItems] = React.useState<string[]>([]);

    const toggleExpanded = (itemId: string) => {
      setExpandedItems(prev => 
        prev.includes(itemId) 
          ? prev.filter(id => id !== itemId)
          : [...prev, itemId]
      );
    };

    const handleItemClick = (item: MenuItem) => {
      if (item.children) {
        toggleExpanded(item.id);
      } else {
        onItemClick?.(item.id);
      }
    };

    const renderMenuItem = (item: MenuItem, level = 0) => {
      const isActive = activeItem === item.id;
      const isExpanded = expandedItems.includes(item.id);
      const hasChildren = item.children && item.children.length > 0;

      return (
        <div key={item.id}>
          <button
            onClick={() => handleItemClick(item)}
            className={cn(
              menuItemVariants({ active: isActive, collapsed }),
              level > 0 && "ml-4 pl-8",
              "relative"
            )}
          >
            <div className="flex items-center min-w-0 flex-1">
              <div className="flex-shrink-0">
                {item.icon}
              </div>
              {!collapsed && (
                <>
                  <span className="ml-3 truncate">{item.label}</span>
                  {item.badge && (
                    <Badge variant="danger" className="ml-auto text-xs">
                      {item.badge}
                    </Badge>
                  )}
                  {hasChildren && (
                    <ChevronDown 
                      className={cn(
                        "ml-auto h-4 w-4 transition-transform duration-200",
                        isExpanded && "rotate-180"
                      )}
                    />
                  )}
                </>
              )}
            </div>
          </button>
          
          {hasChildren && !collapsed && isExpanded && (
            <div className="mt-1 space-y-1">
              {item.children?.map(child => renderMenuItem(child, level + 1))}
            </div>
          )}
        </div>
      );
    };

    // Profile section props with fallbacks
    const {
      avatarUrl = "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=64",
      name = "John Doe",
      email = "john@company.com",
      avatarFallback = "JD",
      collapsedAvatarSize = "sm",
      expandedAvatarSize = "sm",
      onClick
    } = profileSectionProps || {};

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col h-screen",
          sidebarVariants({ collapsed }),
          className
        )}
        style={props.style}
        {...props}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {!collapsed && (
            <SidebarHeader
              title={title}
              letter={titleLetter}
              className={headerClassName}
            />
          )}
          <button
            onClick={onToggle}
            className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4 text-gray-600" />
            ) : (
              <ChevronLeft className="h-4 w-4 text-gray-600" />
            )}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {menuItems.map(item => renderMenuItem(item))}
        </nav>

        {/* User Profile Section */}
        <div className="border-t border-gray-200 p-4">
          {collapsed ? (
            <div className="flex justify-center">
              <div
                className={cn(
                  "rounded-lg transition-colors",
                  onClick && "cursor-pointer hover:bg-primary-50 focus:bg-primary-100 outline-none ring-2 ring-transparent focus:ring-primary-300"
                )}
                tabIndex={onClick ? 0 : undefined}
                role={onClick ? "button" : undefined}
                aria-label={onClick ? "View profile" : undefined}
                onClick={onClick}
                onKeyDown={onClick ? (e) => { if (e.key === "Enter" || e.key === " ") onClick(e as any); } : undefined}
              >
                <Avatar size={collapsedAvatarSize}>
                  <AvatarImage src={avatarUrl} />
                  <AvatarFallback>{avatarFallback}</AvatarFallback>
                </Avatar>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div
                className={cn(
                  "flex items-center space-x-3 rounded-lg transition-colors",
                  onClick && "cursor-pointer hover:bg-primary-50 focus:bg-primary-100 outline-none ring-2 ring-transparent focus:ring-primary-300"
                )}
                tabIndex={onClick ? 0 : undefined}
                role={onClick ? "button" : undefined}
                aria-label={onClick ? "View profile" : undefined}
                onClick={onClick}
                onKeyDown={onClick ? (e) => { if (e.key === "Enter" || e.key === " ") onClick(e as any); } : undefined}
              >
                <Avatar size={expandedAvatarSize}>
                  <AvatarImage src={avatarUrl} />
                  <AvatarFallback>{avatarFallback}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {email}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                {/* Reusable, theme-agnostic profile/logout buttons */}
                <ProfileButton className="flex-1" {...profileButtonProps} />
                <LogoutButton className="flex-1" {...logoutButtonProps} />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

Sidebar.displayName = "Sidebar";

export { Sidebar, sidebarVariants, type MenuItem };