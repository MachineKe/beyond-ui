/**
 * Centralized docs/config for all showcased components:
 * - description, usage example, props table, etc.
 * Used for ComponentShowcase main screen documentation.
 */
export const componentDocs = {
  button: {
    name: "Button",
    description: "A versatile button component with multiple variants and sizes.",
    example: `<Button variant="primary" size="md">
  Click me
</Button>`,
    props: [
      { name: "variant", type: "string", default: "primary", description: "Button style variant" },
      { name: "size", type: "string", default: "md", description: "Button size" },
      { name: "disabled", type: "boolean", default: "false", description: "Disable the button" }
    ]
  },
  input: {
    name: "Input",
    description: "A flexible input component with validation states and different sizes.",
    example: `<Input placeholder="Enter your email" />`,
    props: [
      { name: "variant", type: "string", default: "default", description: "Input variant (default/success/error)" },
      { name: "inputSize", type: "string", default: "md", description: "Input size" },
      { name: "placeholder", type: "string", default: "", description: "Placeholder text" }
    ]
  },
  badge: {
    name: "Badge",
    description: "A small tag for statuses or classifications.",
    example: `<Badge>Default</Badge>`,
    props: [
      { name: "variant", type: "string", default: "default", description: "Badge style variant" }
    ]
  },
  card: {
    name: "Card",
    description: "A container element for grouping content.",
    example: `<Card><CardContent>Example</CardContent></Card>`,
    props: [
      { name: "children", type: "ReactNode", description: "Card content" }
    ]
  },
  textarea: {
    name: "Textarea",
    description: "A multi-line text input component.",
    example: `<Textarea placeholder="Write here..." />`,
    props: [
      { name: "rows", type: "number", default: 3, description: "Number of rows" }
    ]
  },
  checkbox: {
    name: "Checkbox",
    description: "A standard form checkbox.",
    example: `<Checkbox checked={true} />`,
    props: [
      { name: "checked", type: "boolean", description: "Checked state" }
    ]
  },
  switch: {
    name: "Switch",
    description: "A boolean toggle control.",
    example: `<Switch checked={true} />`,
    props: [
      { name: "checked", type: "boolean", description: "Checked state" }
    ]
  },
  avatar: {
    name: "Avatar",
    description: "Displays a user profile image or initials.",
    example: `<Avatar><AvatarFallback>U</AvatarFallback></Avatar>`,
    props: [
      { name: "size", type: "\"sm\"|\"md\"|\"lg\"", default: "md", description: "Avatar size" }
    ]
  },
  alert: {
    name: "Alert",
    description: "Displays messages for important info.",
    example: `<Alert variant="info"><AlertTitle>Info</AlertTitle></Alert>`,
    props: [
      { name: "variant", type: "string", default: "info", description: "Alert type" }
    ]
  },
  toast: {
    name: "Toast",
    description: "Transient notification message overlay.",
    example: `<Toast />`,
    props: []
  },
  modal: {
    name: "Modal",
    description: "A dialog overlay for user attention.",
    example: `<Modal open={true} onOpenChange={() => {}} />`,
    props: [
      { name: "open", type: "boolean", description: "Show or hide the modal" }
    ]
  },
  spinner: {
    name: "Spinner",
    description: "Animated indicator for loading states.",
    example: `<Spinner />`,
    props: []
  },
  skeleton: {
    name: "Skeleton",
    description: "Shimmer placeholder for loading UIs.",
    example: `<Skeleton className="h-6 w-32" />`,
    props: [
      { name: "className", type: "string", description: "Skeleton custom styles" }
    ]
  },
  statscard: {
    name: "StatsCard",
    description: "Shows key metrics and trends.",
    example: `<StatsCard title="Users" value="2,543" />`,
    props: [
      { name: "title", type: "string", description: "Card title" },
      { name: "value", type: "string|number", description: "Main value" }
    ]
  },
  tabs: {
    name: "Tabs",
    description: "Navigation between content views.",
    example: `<Tabs value="tab-1"><TabsList>...</TabsList></Tabs>`,
    props: [
      { name: "value", type: "string", description: "Selected tab value" }
    ]
  },
  sidebar: {
    name: "Sidebar",
    description: "Persistent vertical navigation panel.",
    example: `<Sidebar menuItems={[]} />`,
    props: []
  },
  navbar: {
    name: "Navbar",
    description: "Top navigation bar for branding and links.",
    example: `<Navbar>...</Navbar>`,
    props: []
  },
  "dashboard-layout": {
    name: "DashboardLayout",
    description: "Layout for dashboards with sidebar and content.",
    example: `<DashboardLayout>...</DashboardLayout>`,
    props: []
  },
  "dashboard-header": {
    name: "DashboardHeader",
    description: "Header for dashboard screens.",
    example: `<DashboardHeader />`,
    props: []
  },
  "dashboard-grid": {
    name: "DashboardGrid",
    description: "Grid container for dashboard widgets.",
    example: `<DashboardGrid>...</DashboardGrid>`,
    props: []
  },
  datatable: {
    name: "DataTable",
    description: "Advanced table for displaying data collections.",
    example: `<DataTable columns={[]} dataSource={[]} />`,
    props: []
  },
  // --- AUTHENTICATION DEMOS ---
  login: {
    name: "Login Page",
    description: "Showcases the reusable LoginForm component as a full login page example.",
    example: `<LoginForm />`,
    props: []
  },
  signup: {
    name: "Signup Page",
    description: "Showcases the reusable SignupForm component as a full signup page example.",
    example: `<SignupForm />`,
    props: []
  },
  shield: {
    name: "!isAuthenticated Shield",
    description: "ProtectedRoute gate which only renders content when authenticated; otherwise shows fallback.",
    example: `<ProtectedRoute>Protected Content</ProtectedRoute>`,
    props: []
  },
  auth: {
    name: "Auth System",
    description: "Demo of authentication UI and flows.",
    example: `<AuthShowcase />`,
    props: []
  },
  "password-reset": {
    name: "Password Reset",
    description: "Showcases the reusable PasswordResetForm component, allowing users to request a password reset via email.",
    example: `<PasswordResetForm onReset={email => { ... }} />`,
    props: [
      { name: "onReset", type: "(email: string) => Promise<void> | void", description: "Submit reset request callback" },
      { name: "isLoading", type: "boolean", description: "Loading indicator" },
      { name: "successMessage", type: "string", description: "Message displayed on success" },
      { name: "errorMessage", type: "string", description: "Error feedback message" }
    ],
  },
};
