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

interface SidebarProps extends VariantProps<typeof sidebarVariants> {
  className?: string;
  onToggle?: () => void;
  menuItems?: MenuItem[];
  activeItem?: string;
  onItemClick?: (itemId: string) => void;
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

    return (
      <div
        ref={ref}
        className={cn(sidebarVariants({ collapsed }), className)}
        {...props}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="font-bold text-xl text-gray-900">Beyond</span>
            </div>
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
              <Avatar size="sm">
                <AvatarImage src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=64" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Avatar size="sm">
                  <AvatarImage src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=64" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    John Doe
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    john@company.com
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 flex items-center justify-center px-3 py-2 text-xs font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <User className="h-3 w-3 mr-1" />
                  Profile
                </button>
                <button className="flex-1 flex items-center justify-center px-3 py-2 text-xs font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <LogOut className="h-3 w-3 mr-1" />
                  Logout
                </button>
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