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
import { Textarea } from "../Textarea";
import { Checkbox } from "../Checkbox";
import { Navbar } from "../Navbar";
import { Sidebar } from "../Sidebar";
import { DashboardGrid } from "../DashboardGrid";
import { DashboardLayout } from "../DashboardLayout";
import { User } from "lucide-react";

// STORY INSPIRED DEMOS:
function ShowcaseButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}

function ShowcaseInputDemo() {
  const [v, setV] = React.useState("");
  return (
    <div className="space-y-4 max-w-md">
      <Input placeholder="Default input" value={v} onChange={e => setV(e.target.value)} />
      <Input placeholder="Success state" variant="success" />
      <Input placeholder="Error state" variant="error" />
      <div className="space-y-2">
        <Input placeholder="Small" inputSize="sm" />
        <Input placeholder="Medium" inputSize="md" />
        <Input placeholder="Large" inputSize="lg" />
      </div>
    </div>
  );
}

function ShowcaseTextareaDemo() {
  const [tv, setTv] = React.useState("");
  return (
    <div className="space-y-4 max-w-md">
      <Textarea placeholder="Default textarea" value={tv} onChange={e => setTv(e.target.value)} />
      <Textarea placeholder="Success state" variant="success" />
      <Textarea placeholder="Error state" variant="error" />
      <div className="space-y-2">
        <Textarea placeholder="Small (default)" />
        <Textarea placeholder="Disabled" disabled />
      </div>
    </div>
  );
}

function ShowcaseSwitchDemo() {
  const [checked, setChecked] = React.useState(false);
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2">
        <Switch checked={checked} onCheckedChange={setChecked} />
        <span>Default</span>
      </label>
      <label className="flex items-center gap-2">
        <Switch checked />
        <span>Checked</span>
      </label>
      <label className="flex items-center gap-2">
        <Switch disabled />
        <span>Disabled</span>
      </label>
      <label className="flex items-center gap-2">
        <Switch size="sm" />
        <span>Small</span>
      </label>
      <label className="flex items-center gap-2">
        <Switch size="lg" />
        <span>Large</span>
      </label>
    </div>
  );
}

function ShowcaseCheckboxDemo() {
  const [checked, setChecked] = React.useState(false);
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2">
        <Checkbox checked={checked} onChange={() => setChecked(!checked)} /> <span>Default</span>
      </label>
      <label className="flex items-center gap-2">
        <Checkbox checked /> <span>Checked</span>
      </label>
      <label className="flex items-center gap-2">
        <Checkbox disabled /> <span>Disabled</span>
      </label>
      <label className="flex items-center gap-2">
        <Checkbox size="sm" /> <span>Small</span>
      </label>
      <label className="flex items-center gap-2">
        <Checkbox size="lg" /> <span>Large</span>
      </label>
    </div>
  );
function ShowcaseSwitchDemo() {
  const [checked, setChecked] = React.useState(false);
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2">
        <Switch checked={checked} onCheckedChange={setChecked} />
        <span>Default</span>
      </label>
      <label className="flex items-center gap-2">
        <Switch checked />
        <span>Checked</span>
      </label>
      <label className="flex items-center gap-2">
        <Switch disabled />
        <span>Disabled</span>
      </label>
      <label className="flex items-center gap-2">
        <Switch size="sm" />
        <span>Small</span>
      </label>
      <label className="flex items-center gap-2">
        <Switch size="lg" />
        <span>Large</span>
      </label>
    </div>
  );
}
}

function ShowcaseCardDemo() {
  return (
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
  );
}
function ShowcaseBadgeDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}
function ShowcaseAvatarDemo() {
  return (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="" />
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" />
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>
    </div>
  );
}
function ShowcaseModalDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Show Modal</Button>
      <Modal open={open} onOpenChange={setOpen}>
        <ModalHeader>
          <ModalTitle>Demo Modal</ModalTitle>
        </ModalHeader>
        <ModalContent>
          <p>This is a basic modal dialog.</p>
        </ModalContent>
        <ModalFooter>
          <Button variant="primary" onClick={() => setOpen(false)}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
function ShowcaseToastDemo() {
  return (
    <>
      <Button onClick={() => showToast.success("This is a toast notification!")}>
        Show Toast
      </Button>
      <Toast />
    </>
  );
}
function ShowcaseSpinnerDemo() {
  return (
    <div className="space-y-4">
      <Spinner />
      <div className="flex gap-2 items-center">
        <Spinner /> <span>Loading data...</span>
      </div>
      <Button variant="primary" disabled>
        <Spinner className="mr-2 h-4 w-4" /> Processing
      </Button>
    </div>
  );
}

const showcasePreviewMap: Record<string, React.FC> = {
  button: ShowcaseButtonDemo,
  input: ShowcaseInputDemo,
  textarea: ShowcaseTextareaDemo,
  checkbox: ShowcaseCheckboxDemo,
  switch: ShowcaseSwitchDemo,
  card: ShowcaseCardDemo,
  badge: ShowcaseBadgeDemo,
  avatar: ShowcaseAvatarDemo,
  alert: ShowcaseAlertDemo,
  statscard: ShowcaseStatsCardDemo,
  tabs: ShowcaseTabsDemo,
  modal: ShowcaseModalDemo,
  toast: ShowcaseToastDemo,
  spinner: ShowcaseSpinnerDemo,
  skeleton: function ShowcaseSkeletonDemo() {
    return (
      <div className="space-y-4 max-w-md">
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-4 w-3/4" />
        <div className="flex gap-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-32" />
        </div>
        <Skeleton className="h-24 w-full" />
      </div>
    );
  },
  navbar: function ShowcaseNavbarDemo() {
    return (
      <Navbar>
        <div className="flex w-full items-center justify-between px-4">
          <span className="font-semibold text-lg">Beyond UI</span>
          <nav className="flex gap-4 ml-auto">
            <a href="#" className="text-blue-500">Home</a>
            <a href="#" className="text-blue-500">Features</a>
            <a href="#" className="text-blue-500">Pricing</a>
          </nav>
          <div className="ml-6">
            <button className="rounded bg-primary-600 text-white px-3 py-1 text-sm">Profile</button>
          </div>
        </div>
      </Navbar>
    );
  },
  sidebar: function ShowcaseSidebarDemo() {
    const menuItems = [
      { id: "dashboard", label: "Dashboard", icon: <BarChart3 className="h-5 w-5" /> },
      { id: "settings", label: "Settings", icon: <Settings className="h-5 w-5" /> },
      { id: "profile", label: "Profile", icon: <User className="h-5 w-5" /> }
    ];
    return (
      <div className="w-64 h-72 bg-white border rounded">
        <Sidebar menuItems={menuItems} />
      </div>
    );
  },
  "dashboard-grid": function ShowcaseDashboardGridDemo() {
    return (
      <DashboardGrid>
        <div className="p-4 bg-white rounded shadow">Widget 1</div>
        <div className="p-4 bg-white rounded shadow">Widget 2</div>
        <div className="p-4 bg-white rounded shadow">Widget 3</div>
        <div className="p-4 bg-white rounded shadow">Widget 4</div>
      </DashboardGrid>
    );
  },
  "dashboard-header": function ShowcaseDashboardHeaderDemo() {
    return (
      <div className="flex justify-between items-center py-4 border-b">
        <div>
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <span className="text-gray-500 text-sm">Insights & analytics</span>
        </div>
        <Button variant="outline">Settings</Button>
      </div>
    );
  },
  "dashboard-layout": function ShowcaseDashboardLayoutDemo() {
    const sidebarMenuItems = [
      { id: "dashboard", label: "Dashboard", icon: <BarChart3 className="h-4 w-4" /> },
      { id: "users", label: "Users", icon: <User className="h-4 w-4" /> },
      { id: "settings", label: "Settings", icon: <Settings className="h-4 w-4" /> },
    ];
    return (
      <DashboardLayout sidebarMenuItems={sidebarMenuItems}>
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-2">Welcome to DashboardLayout</h2>
          <p className="mb-4 text-gray-600">Main content appears here. The sidebar and header are real reusable components.</p>
          <Button variant="primary">Dashboard Action</Button>
        </div>
      </DashboardLayout>
    );
  },
};
function ShowcaseAlertDemo() {
  return (
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
  );
}
function ShowcaseStatsCardDemo() {
  return (
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
  );
}
function ShowcaseTabsDemo() {
  const [activeTab, setActiveTab] = React.useState("tab-1");
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        <TabsTrigger value="tab-1">Tab One</TabsTrigger>
        <TabsTrigger value="tab-2">Tab Two</TabsTrigger>
        <TabsTrigger value="tab-3">Tab Three</TabsTrigger>
      </TabsList>
      <TabsContent value="tab-1">
        <span className="block p-4">Content for Tab One</span>
      </TabsContent>
      <TabsContent value="tab-2">
        <span className="block p-4">Content for Tab Two</span>
      </TabsContent>
      <TabsContent value="tab-3">
        <span className="block p-4">Content for Tab Three</span>
      </TabsContent>
    </Tabs>
  );
}

Object.assign(showcasePreviewMap, {
  alert: ShowcaseAlertDemo,
  statscard: ShowcaseStatsCardDemo,
  tabs: ShowcaseTabsDemo,
});

// Helper component to render a Storybook story in JSX
import { Card, CardHeader, CardTitle, CardContent } from "../Card";
import { Badge } from "../Badge";
import { Alert, AlertTitle, AlertDescription } from "../Alert";
import { Avatar, AvatarImage, AvatarFallback } from "../Avatar";
import { Modal, ModalHeader, ModalTitle, ModalContent, ModalFooter } from "../Modal";
import { Toast, showToast } from "../Toast";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../Tabs";
import { StatsCard } from "../StatsCard";
import { Switch } from "../Switch";
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
    component: null
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
    component: null
  },
  checkbox: {
    name: "Checkbox",
    description: "A standard checkbox component for forms. Supports checked, unchecked, disabled, and size variants.",
    example: `<Checkbox checked={true} onChange={() => {}} />`,
    props: [
      { name: "checked", type: "boolean", default: "false", description: "Whether the checkbox is checked" },
      { name: "onChange", type: "(event) => void", description: "Callback when checkbox changes" },
      { name: "disabled", type: "boolean", default: "false", description: "Disable the checkbox" },
      { name: "size", type: `"sm" | "md" | "lg"`, default: "md", description: "Size of the checkbox" },
    ],
    component: showcasePreviewMap["checkbox"]
  },
  switch: {
    name: "Switch",
    description: "A toggle switch component for representing boolean states. Supports size variants and disabled state.",
    example: `<Switch checked={true} onCheckedChange={() => {}} />`,
    props: [
      { name: "checked", type: "boolean", default: "false", description: "Whether the switch is on" },
      { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Callback when switch state changes" },
      { name: "disabled", type: "boolean", default: "false", description: "Disable the switch" },
      { name: "size", type: `"sm" | "md" | "lg"`, default: "md", description: "Size of the switch" },
    ],
    component: showcasePreviewMap["switch"]
  },
  textarea: {
    name: "Textarea",
    description: "A multi-line input control suitable for entering longer blocks of text. Supports success/error states and various sizes.",
    example: `<Textarea placeholder="Enter your message..." variant="default" />`,
    props: [
      { name: "variant", type: "string", default: "default", description: "Textarea validation state" },
      { name: "rows", type: "number", default: "3", description: "Number of visible text lines" },
      { name: "disabled", type: "boolean", default: "false", description: "Disabled state" },
      { name: "placeholder", type: "string", default: "", description: "Placeholder text" },
    ],
    component: showcasePreviewMap["textarea"]
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
    component: null
  },
  badge: {
    name: "Badge",
    description: "A small, customizable tag for displaying statuses or labels.",
    example: `<Badge variant="default">Default</Badge>`,
    props: [
      { name: "variant", type: `"default" | "secondary" | "success" | "danger" | "warning" | "outline"`, default: "default", description: "Badge color or style variant" },
      { name: "children", type: "ReactNode", required: true, description: "Badge label content" }
    ],
    component: showcasePreviewMap["badge"]
  },
  tabs: {
    name: "Tabs",
    description: "A flexible tabbed navigation component. Allows users to switch between views.",
    example: `<Tabs value="tab-1" onValueChange={() => {}}>
  <TabsList>
    <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab-1">Content 1</TabsContent>
  <TabsContent value="tab-2">Content 2</TabsContent>
</Tabs>`,
    props: [
      { name: "value", type: "string", required: true, description: "The value of the currently selected tab" },
      { name: "onValueChange", type: "(value: string) => void", description: "Called when a different tab is selected" },
      { name: "children", type: "ReactNode", required: true, description: "Tab triggers and contents" }
    ],
    component: showcasePreviewMap["tabs"]
  },
  toast: {
    name: "Toast",
    description: "A notification/toast component to display feedback messages over the UI.",
    example: `<Button onClick={() => showToast.success("Saved successfully!")}>Show Toast</Button>
<Toast />`,
    props: [
      { name: "children", type: "ReactNode", description: "Toast content (commonly used internally)" }
    ],
    component: showcasePreviewMap["toast"]
  },
  modal: {
    name: "Modal",
    description: "A dialog/modal overlay component for displaying actions, forms, or confirmation content.",
    example: `<Modal open={open} onOpenChange={setOpen}>
  <ModalHeader>Modal Title</ModalHeader>
  <ModalContent>Modal body</ModalContent>
  <ModalFooter>
    <Button onClick={() => setOpen(false)}>Close</Button>
  </ModalFooter>
</Modal>`,
    props: [
      { name: "open", type: "boolean", required: true, description: "Whether the modal is open" },
      { name: "onOpenChange", type: "(open: boolean) => void", required: true, description: "Called with new open state when modal is toggled" },
      { name: "children", type: "ReactNode", required: true, description: "Content of the modal dialog" }
    ],
    component: showcasePreviewMap["modal"]
  },
  spinner: {
    name: "Spinner",
    description: "A loading spinner to indicate ongoing processing or loading state.",
    example: `<Spinner size="md" />`,
    props: [
      { name: "size", type: `"sm" | "md" | "lg"`, default: "md", description: "Spinner size" },
      { name: "color", type: "string", default: "primary", description: "Spinner color (optional)" },
      { name: "className", type: "string", description: "Custom CSS class for the spinner" }
    ],
    component: showcasePreviewMap["spinner"]
  },
  skeleton: {
    name: "Skeleton",
    description: "A placeholder skeleton component for loading states. Use to display a placeholder UI while content loads.",
    example: `<Skeleton className="h-6 w-32" />`,
    props: [
      { name: "className", type: "string", description: "Custom class for size and style" }
    ],
    component: showcasePreviewMap["skeleton"]
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
  },
  "dashboard-layout": {
    name: "DashboardLayout",
    description: "Layout component for admin dashboards and analytics panels. Useful for wrapping dashboard structure with sidebars and content.",
    example: `<DashboardLayout>
  <Sidebar />
  <main>
    Dashboard content here
  </main>
</DashboardLayout>`,
    props: [
      { name: "children", type: "ReactNode", required: true, description: "Dashboard page content" }
    ],
    component: showcasePreviewMap["dashboard-layout"]
  },
  "dashboard-grid": {
    name: "DashboardGrid",
    description: "Grid container for dashboard widgets.",
    example: `<DashboardGrid>
  <Widget />
  <Widget />
</DashboardGrid>`,
    props: [
      { name: "children", type: "ReactNode", required: true, description: "Widgets to show in the grid" },
    ],
    component: showcasePreviewMap["dashboard-grid"]
  },
  "sidebar": {
    name: "Sidebar",
    description: "Navigation sidebar for layouts. Supports menu items and responsive display.",
    example: `<Sidebar menuItems={menuItems} />`,
    props: [
      { name: "menuItems", type: "Array", required: true, description: "Sidebar navigation items" },
    ],
    component: showcasePreviewMap["sidebar"]
  },
  "navbar": {
    name: "Navbar",
    description: "Navigation bar for app layout. Add links, branding, user actions etc.",
    example: `<Navbar>
  <NavbarBrand>My App</NavbarBrand>
  <NavbarLinks>
    <a href="#">Home</a>
    <a href="#">About</a>
  </NavbarLinks>
</Navbar>`,
    props: [
      { name: "children", type: "ReactNode", required: true, description: "Navbar content (branding, links, actions)" },
    ],
    component: showcasePreviewMap["navbar"]
  },
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
                          {showcasePreviewMap[selectedComponent]
                            ? React.createElement(showcasePreviewMap[selectedComponent])
                            : null}
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
                                  {("required" in prop && prop.required) && (
                                    <Badge variant="danger" className="ml-2 text-xs">Required</Badge>
                                  )}
                                </td>
                                <td className="p-3 text-gray-600">{prop.type}</td>
                                <td className="p-3 text-gray-600">
                                  {("default" in prop && prop.default) ? (
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