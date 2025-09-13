import * as React from "react";
import { useState, useEffect } from "react";
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
  Settings
} from "lucide-react";
import { cn } from "../../utils/cn";
import { Button } from "../Button";
import { Input } from "../Input";
import { Card, CardHeader, CardTitle, CardContent } from "../Card";
import { Badge } from "../Badge";
import { Alert, AlertTitle, AlertDescription } from "../Alert";
import { Avatar, AvatarImage, AvatarFallback } from "../Avatar";
import { Modal, ModalHeader, ModalTitle, ModalContent, ModalFooter } from "../Modal";
import { Toast, showToast } from "../Toast";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../Tabs";
import { StatsCard } from "../StatsCard";
import { Switch } from "../Switch";
import { Checkbox } from "../Checkbox";
import { Textarea } from "../Textarea";
import { Spinner } from "../Spinner";
import { Skeleton } from "../Skeleton";

// Component categories and their items
const componentCategories = {
  "Forms": {
    icon: <MousePointer className="h-4 w-4" />,
    components: [
      { name: "Button", id: "button" },
      { name: "Input", id: "input" },
      { name: "Textarea", id: "textarea" },
      { name: "Checkbox", id: "checkbox" },
      { name: "Switch", id: "switch" },
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
    ]
  },
  "Feedback": {
    icon: <AlertCircle className="h-4 w-4" />,
    components: [
      { name: "Alert", id: "alert" },
      { name: "Toast", id: "toast" },
      { name: "Modal", id: "modal" },
      { name: "Spinner", id: "spinner" },
      { name: "Skeleton", id: "skeleton" },
    ]
  },
  "Layout": {
    icon: <Layout className="h-4 w-4" />,
    components: [
      { name: "DashboardLayout", id: "dashboard-layout" },
      { name: "DashboardGrid", id: "dashboard-grid" },
      { name: "Sidebar", id: "sidebar" },
      { name: "Navbar", id: "navbar" },
    ]
  }
};

// Component examples and documentation
const componentDocs = {
  button: {
    name: "Button",
    description: "A versatile button component with multiple variants and sizes.",
    example: `<Button variant="primary" size="md">
  Click me
</Button>`,
    props: [
      { name: "variant", type: "string", default: "primary", description: "Button style variant" },
      { name: "size", type: "string", default: "md", description: "Button size" },
      { name: "disabled", type: "boolean", default: "false", description: "Disable the button" },
    ],
    component: (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="success">Success</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </div>
    )
  },
  input: {
    name: "Input",
    description: "A flexible input component with validation states and different sizes.",
    example: `<Input 
  placeholder="Enter your email" 
  variant="default" 
  inputSize="md" 
/>`,
    props: [
      { name: "variant", type: "string", default: "default", description: "Input validation state" },
      { name: "inputSize", type: "string", default: "md", description: "Input size" },
      { name: "placeholder", type: "string", default: "", description: "Placeholder text" },
    ],
    component: (
      <div className="space-y-4 max-w-md">
        <Input placeholder="Default input" />
        <Input placeholder="Success state" variant="success" />
        <Input placeholder="Error state" variant="error" />
        <div className="space-y-2">
          <Input placeholder="Small" inputSize="sm" />
          <Input placeholder="Medium" inputSize="md" />
          <Input placeholder="Large" inputSize="lg" />
        </div>
      </div>
    )
  },
  card: {
    name: "Card",
    description: "A flexible container component for grouping related content.",
    example: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here.
  </CardContent>
</Card>`,
    props: [
      { name: "variant", type: "string", default: "default", description: "Card style variant" },
      { name: "padding", type: "string", default: "md", description: "Card padding size" },
    ],
    component: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Default Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">This is a default card with standard styling.</p>
          </CardContent>
        </Card>
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Elevated Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">This card has elevated shadow styling.</p>
          </CardContent>
        </Card>
      </div>
    )
  },
  alert: {
    name: "Alert",
    description: "Display important messages and notifications to users.",
    example: `<Alert variant="info">
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    This is an informational alert.
  </AlertDescription>
</Alert>`,
    props: [
      { name: "variant", type: "string", default: "default", description: "Alert type variant" },
    ],
    component: (
      <div className="space-y-4">
        <Alert variant="info">
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>This is an informational alert message.</AlertDescription>
        </Alert>
        <Alert variant="success">
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>Operation completed successfully!</AlertDescription>
        </Alert>
        <Alert variant="warning">
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>Please review your input before proceeding.</AlertDescription>
        </Alert>
        <Alert variant="danger">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Something went wrong. Please try again.</AlertDescription>
        </Alert>
      </div>
    )
  },
  statscard: {
    name: "StatsCard",
    description: "Display key metrics and statistics with trend indicators.",
    example: `<StatsCard
  title="Total Users"
  value="2,543"
  trend={{
    direction: "up",
    value: "+12%",
    label: "from last month"
  }}
  icon={<Users className="h-6 w-6" />}
/>`,
    props: [
      { name: "title", type: "string", required: true, description: "Card title" },
      { name: "value", type: "string | number", required: true, description: "Main value to display" },
      { name: "trend", type: "object", description: "Trend information" },
      { name: "icon", type: "ReactNode", description: "Icon to display" },
    ],
    component: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StatsCard
          title="Total Users"
          value="2,543"
          trend={{
            direction: "up",
            value: "+12%",
            label: "from last month"
          }}
          icon={<BarChart3 className="h-6 w-6 text-primary-600" />}
        />
        <StatsCard
          variant="gradient"
          color="success"
          title="Revenue"
          value="$45,231"
          trend={{
            direction: "up",
            value: "+8.2%",
            label: "from last month"
          }}
          icon={<BarChart3 className="h-6 w-6" />}
        />
      </div>
    )
  }
};

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
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
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

  const filteredCategories = Object.entries(componentCategories).reduce((acc, [categoryName, categoryData]) => {
    const filteredComponents = categoryData.components.filter(component =>
      component.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    if (filteredComponents.length > 0) {
      acc[categoryName] = {
        ...categoryData,
        components: filteredComponents
      };
    }
    
    return acc;
  }, {} as typeof componentCategories);

  const currentDoc = componentDocs[selectedComponent as keyof typeof componentDocs];

  const getViewportClass = () => {
    switch (viewMode) {
      case "tablet": return "max-w-2xl";
      case "mobile": return "max-w-sm";
      default: return "w-full";
    }
  };

  return (
    <div className={cn("flex h-screen bg-gray-50", className)}>
      <Toast />
      
      {/* Sidebar */}
      <div className={cn(
        "bg-white border-r border-gray-200 transition-all duration-300 flex flex-col",
        sidebarCollapsed ? "w-16" : "w-80"
      )}>
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
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform",
                    expandedCategories.includes(categoryName) && "rotate-180"
                  )} />
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
              {currentDoc && (
                <Badge variant="outline">{currentDoc.name}</Badge>
              )}
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
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
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
              <Tabs value="preview" onValueChange={() => {}}>
                <TabsList>
                  <TabsTrigger value="preview">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </TabsTrigger>
                  <TabsTrigger value="code">
                    <Code className="h-4 w-4 mr-2" />
                    Code
                  </TabsTrigger>
                  <TabsTrigger value="props">
                    <Settings className="h-4 w-4 mr-2" />
                    Props
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="preview" className="mt-6">
                  <Card>
                    <CardContent className="p-8">
                      <div className={cn("mx-auto transition-all duration-300", getViewportClass())}>
                        <div className={cn(darkMode && "dark")}>
                          {currentDoc.component}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="code" className="mt-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle className="text-lg">Usage Example</CardTitle>
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
                    </CardHeader>
                    <CardContent>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                        <code>{currentDoc.example}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="props" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Component Props</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left p-3 font-medium text-gray-900">Prop</th>
                              <th className="text-left p-3 font-medium text-gray-900">Type</th>
                              <th className="text-left p-3 font-medium text-gray-900">Default</th>
                              <th className="text-left p-3 font-medium text-gray-900">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentDoc.props?.map((prop, index) => (
                              <tr key={index} className="border-b border-gray-100">
                                <td className="p-3">
                                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                                    {prop.name}
                                  </code>
                                  {prop.required && (
                                    <Badge variant="danger" className="ml-2 text-xs">Required</Badge>
                                  )}
                                </td>
                                <td className="p-3 text-gray-600">{prop.type}</td>
                                <td className="p-3 text-gray-600">
                                  {prop.default && (
                                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                                      {prop.default}
                                    </code>
                                  )}
                                </td>
                                <td className="p-3 text-gray-600">{prop.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
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