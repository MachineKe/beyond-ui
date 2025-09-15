import * as React from "react";
import { useState } from "react";
import {
  Search,
  Copy,
  Check,
  Monitor,
  Tablet,
  Smartphone,
  Sun,
  Moon,
  ChevronRight,
  ChevronDown,
  Code,
  Eye,
  Book,
  Palette,
  Layout,
  MousePointer,
  AlertCircle,
  BarChart3,
  Settings,
  Shield
} from "lucide-react";
import { cn } from "../../utils/cn";
import { Button } from "../Button";
import { Input } from "../Input";
import { Badge } from "../Badge";
import { Toast, showToast } from "../Toast";

import { showcaseRegistry } from "./showcaseRegistry";
import { componentDocs } from "./componentDocs";

// Component categories and their items
const componentCategories = {
  Forms: {
    icon: <MousePointer className="h-4 w-4" />,
    components: [
      { name: "Button", id: "button" },
      { name: "Input", id: "input" },
      { name: "Textarea", id: "textarea" },
      { name: "Checkbox", id: "checkbox" },
      { name: "Switch", id: "switch" }
    ]
  },
  "Data Display": {
    icon: <BarChart3 className="h-4 w-4" />,
    components: [
      { name: "Card", id: "card" },
      { name: "Badge", id: "badge" },
      { name: "Avatar", id: "avatar" },
      { name: "StatsCard", id: "statscard" },
      { name: "Tabs", id: "tabs" },
      { name: "DataTable", id: "datatable" }
    ]
  },
  Feedback: {
    icon: <AlertCircle className="h-4 w-4" />,
    components: [
      { name: "Alert", id: "alert" },
      { name: "Toast", id: "toast" },
      { name: "Modal", id: "modal" },
      { name: "Spinner", id: "spinner" },
      { name: "Skeleton", id: "skeleton" }
    ]
  },
  Authentication: {
    icon: <Shield className="h-4 w-4" />,
    components: [
      { name: "Auth System", id: "auth" },
      { name: "Login Page", id: "login" },
      { name: "Signup Page", id: "signup" },
      { name: "!isAuthenticated Shield", id: "shield" },
    ]
  },
  Layout: {
    icon: <Layout className="h-4 w-4" />,
    components: [
      { name: "DashboardLayout", id: "dashboard-layout" },
      { name: "DashboardGrid", id: "dashboard-grid" },
      { name: "Sidebar", id: "sidebar" },
      { name: "Navbar", id: "navbar" }
    ]
  }
};

// Props
interface ComponentShowcaseProps {
  className?: string;
}

export const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({ className }) => {
  const [selectedComponent, setSelectedComponent] = useState("button");
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["Forms"]);
  const [viewMode, setViewMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [darkMode, setDarkMode] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      showToast.success("Code copied to clipboard!");
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      showToast.error("Failed to copy code");
    }
  };

  const filteredCategories = Object.entries(componentCategories).reduce(
    (acc, [categoryName, categoryData]) => {
      const filteredComponents = categoryData.components.filter((component) =>
        component.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (filteredComponents.length > 0) {
        (acc as any)[categoryName] = {
          ...categoryData,
          components: filteredComponents
        };
      }

      return acc;
    },
    {} as Partial<typeof componentCategories>
  );

  const currentDoc = componentDocs[selectedComponent as keyof typeof componentDocs];

  const getViewportClass = () => {
    switch (viewMode) {
      case "tablet":
        return "max-w-2xl";
      case "mobile":
        return "max-w-sm";
      default:
        return "w-full";
    }
  };

  return (
    <div className={cn("flex h-screen bg-gray-50", className)}>
      <Toast />

      {/* Sidebar */}
      <div
        className={cn(
          "bg-white border-r border-gray-200 transition-all duration-300 flex flex-col",
          sidebarCollapsed ? "w-16" : "w-80"
        )}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200">
          {!sidebarCollapsed && (
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Palette className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold text-lg text-gray-900">Beyond UI</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarCollapsed(true)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          {sidebarCollapsed && (
            <div className="flex justify-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarCollapsed(false)}
              >
                <Palette className="h-4 w-4" />
              </Button>
            </div>
          )}

          {!sidebarCollapsed && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          {Object.entries(filteredCategories).map(([categoryName, categoryData]) => (
            <div key={categoryName} className="mb-4">
              <button
                onClick={() => !sidebarCollapsed && toggleCategory(categoryName)}
                className={cn(
                  "flex items-center w-full p-2 text-sm font-medium rounded-lg transition-colors",
                  "hover:bg-gray-100 text-gray-700",
                  sidebarCollapsed ? "justify-center" : "justify-between"
                )}
              >
                <div className="flex items-center space-x-2">
                  {categoryData.icon}
                  {!sidebarCollapsed && <span>{categoryName}</span>}
                </div>
                {!sidebarCollapsed && (
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      expandedCategories.includes(categoryName) && "rotate-180"
                    )}
                  />
                )}
              </button>

              {!sidebarCollapsed && expandedCategories.includes(categoryName) && (
                <div className="mt-2 ml-6 space-y-1">
                  {categoryData.components.map((component) => (
                    <button
                      key={component.id}
                      onClick={() => setSelectedComponent(component.id)}
                      className={cn(
                        "flex items-center w-full p-2 text-sm rounded-lg transition-colors",
                        selectedComponent === component.id
                          ? "bg-primary-50 text-primary-700 border-r-2 border-primary-600"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      )}
                    >
                      {component.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">
                {currentDoc?.name || "Component Showcase"}
              </h1>
              {currentDoc && <Badge variant="outline">{currentDoc.name}</Badge>}
            </div>

            <div className="flex items-center space-x-2">
              {/* Viewport Controls */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <Button
                  variant={viewMode === "desktop" ? "primary" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("desktop")}
                >
                  <Monitor className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "tablet" ? "primary" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("tablet")}
                >
                  <Tablet className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "mobile" ? "primary" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("mobile")}
                >
                  <Smartphone className="h-4 w-4" />
                </Button>
              </div>

              {/* Dark Mode Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6">
          {currentDoc ? (
            <div className="max-w-6xl mx-auto space-y-8">
              {/* Description */}
              <div>
                <p className="text-lg text-gray-600">{currentDoc.description}</p>
              </div>

              {/* Tabs */}
              <div>
                <div className="flex gap-3 mb-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedComponent("button")}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedComponent("button")}
                  >
                    <Code className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedComponent("button")}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Props
                  </Button>
                </div>
                <div>
                  <div className="mt-6">
                    <div className="bg-white rounded-lg shadow p-6">
                      {/* Preview */}
                      <div
                        className={cn(
                          "mx-auto transition-all duration-300",
                          getViewportClass()
                        )}
                      >
                        <div className={cn(darkMode && "dark")}>
                          {showcaseRegistry[selectedComponent]
                            ? React.createElement(
                                showcaseRegistry[selectedComponent]
                              )
                            : null}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Code Example */}
                  <div className="mt-6">
                    <div className="bg-white rounded-lg shadow p-6">
                      <div className="flex flex-row items-center justify-between">
                        <h2 className="text-lg font-semibold mb-0">
                          Usage Example
                        </h2>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(currentDoc.example)}
                        >
                          {copiedCode === currentDoc.example ? (
                            <Check className="h-4 w-4 mr-2" />
                          ) : (
                            <Copy className="h-4 w-4 mr-2" />
                          )}
                          Copy
                        </Button>
                      </div>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                        <code>{currentDoc.example}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Props Table */}
                  <div className="mt-6">
                    <div className="bg-white rounded-lg shadow p-6">
                      <h2 className="text-lg font-semibold mb-4">
                        Component Props
                      </h2>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left p-3 font-medium text-gray-900">
                                Prop
                              </th>
                              <th className="text-left p-3 font-medium text-gray-900">
                                Type
                              </th>
                              <th className="text-left p-3 font-medium text-gray-900">
                                Default
                              </th>
                              <th className="text-left p-3 font-medium text-gray-900">
                                Description
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentDoc.props?.map((prop: any, index: number) => (
                              <tr key={index} className="border-b border-gray-100">
                                <td className="p-3">
                                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                                    {prop.name}
                                  </code>
                                  {"required" in prop && prop.required && (
                                    <Badge variant="danger" className="ml-2 text-xs">
                                      Required
                                    </Badge>
                                  )}
                                </td>
                                <td className="p-3 text-gray-600">{prop.type}</td>
                                <td className="p-3 text-gray-600">
                                  {"default" in prop && prop.default ? (
                                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                                      {prop.default}
                                    </code>
                                  ) : null}
                                </td>
                                <td className="p-3 text-gray-600">{prop.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <Book className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Select a Component
                </h2>
                <p className="text-gray-600">
                  Choose a component from the sidebar to view its documentation and examples.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
