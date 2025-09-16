import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  PageLayout,
  PageHeader,
  PageHero,
  PageContent,
  PageSidebar,
  PageFooter,
  PageLayoutContent,
} from '../src/components/PageLayout';
import { Button } from '../src/components/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../src/components/Card';
import { Badge } from '../src/components/Badge';
import { Input } from '../src/components/Input';
import { Avatar, AvatarImage, AvatarFallback } from '../src/components/Avatar';
import { StatsCard } from '../src/components/StatsCard';
import { useBreakpoint } from '../src/hooks/useBreakpoint';
import { useDarkMode } from '../src/hooks/useDarkMode';
import {
  LandingPageExample,
  ProductPageExample,
  BlogPostExample,
} from '../src/components/PageLayout/PageLayoutExamples';

const meta: Meta<typeof PageLayout> = {
  title: 'Components/PageLayout',
  component: PageLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
PageLayout is the flexible wrapper for Beyond-UI page structure.
Supports variants, maxWidth, semantic ARIA markup, and theme-agnostic styling.
Use with Beyond-UI header, hero, sidebar, footer, and any reusable components.

**Theming:**  
Components use Tailwind semantic tokens (e.g. bg-primary) and the app can override colors in tailwind.config.js.
A default fallback theme is included.  
For dark mode, see the "Theme Switch/Dark Mode" story below.

**Accessibility:**  
All components use correct landmark tags and ARIA roles.

**Examples below demonstrate:**
- Default layout
- Centered layout
- Sidebar layout
- Landing/Product/Blog page use cases
- Theme switching (light/dark)
- Composability with reusable components/hooks

More at [Beyond-UI Documentation](https://github.com/beyondcorp/beyond-ui)
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'centered',
        'sidebar',
        'landing',
        'product',
        'blog',
      ],
    },
    maxWidth: {
      control: 'select',
      options: [
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        'full',
      ],
    },
    contentLayout: {
      control: 'select',
      options: [
        'default',
        'centered',
        'sidebar',
        'fullWidth',
      ],
    },
    contentSpacing: {
      control: 'select',
      options: [
        'none',
        'sm',
        'md',
        'lg',
        'xl',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    maxWidth: 'xl',
    children: (
      <>
        <PageHeader>
          <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between h-16">
            <span className="font-bold text-xl text-gray-900">Default Page</span>
            <Button variant="primary">Action</Button>
          </nav>
        </PageHeader>
        <PageContent maxWidth="lg" className="py-12">
          <h1 className="text-3xl font-bold mb-6">Welcome</h1>
          <p className="text-gray-600 mb-12">
            This is the default layout. Add your content here!
          </p>
          <StatsCard title="Users" value={1234} icon={<Avatar><AvatarFallback>U</AvatarFallback></Avatar>} />
        </PageContent>
        <PageFooter variant="simple">
          <div className="text-center py-8">
            <p>&copy; 2025 Beyond-UI. All rights reserved.</p>
          </div>
        </PageFooter>
      </>
    ),
  },
};

export const Centered: Story = {
  args: {
    variant: 'centered',
    maxWidth: 'xl',
    children: (
      <PageLayoutContent layout="centered" spacing="lg">
        <Card className="mx-auto max-w-md">
          <CardHeader>
            <CardTitle>Centered Card</CardTitle>
          </CardHeader>
          <CardContent>
            <Input placeholder="Type here..." />
            <Button variant="primary" className="mt-4 w-full">
              Submit
            </Button>
          </CardContent>
        </Card>
      </PageLayoutContent>
    ),
  },
};

export const SidebarLayout: Story = {
  args: {
    variant: 'sidebar',
    maxWidth: 'xl',
    children: (
      <PageLayoutContent layout="sidebar" spacing="lg">
        {/* Main Content */}
        <PageContent maxWidth="full" className="lg:flex-1">
          <h2 className="text-xl font-bold mb-4">Sidebar Layout</h2>
          <p className="text-gray-600 mb-4">Main content goes here.</p>
          <StatsCard title="Revenue" value="$42K" icon={<Badge variant="danger">!</Badge>} />
        </PageContent>
        {/* Sidebar */}
        <PageSidebar position="right" width="md">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Sidebar</CardTitle>
              </CardHeader>
              <CardContent>
                <Avatar size="sm">
                  <AvatarImage src="" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <Badge variant="success" className="ml-2">
                  Online
                </Badge>
              </CardContent>
            </Card>
          </div>
        </PageSidebar>
      </PageLayoutContent>
    ),
  },
};

export const LandingPage: Story = {
  render: () => <LandingPageExample />,
  name: 'Landing Page (Full Demo)',
};

export const ProductPage: Story = {
  render: () => <ProductPageExample />,
  name: 'Product Page (Full Demo)',
};

export const BlogPage: Story = {
  render: () => <BlogPostExample />,
  name: 'Blog Page (Full Demo)',
};

export const ResponsiveWithHook: Story = {
  render: () => {
    const { currentBreakpoint } = useBreakpoint();
    return (
      <PageLayout variant="centered" maxWidth="xl">
        <PageHeader>
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between h-16">
            <span className="font-bold text-xl text-gray-900">Responsive Demo</span>
            <Badge variant="outline" className="ml-4">
              Breakpoint: {currentBreakpoint}
            </Badge>
          </div>
        </PageHeader>
        <PageLayoutContent layout="centered" spacing="lg">
          <StatsCard title="Sales" value={378} icon={<Badge variant="success">$</Badge>} />
        </PageLayoutContent>
        <PageFooter variant="simple">
          <div className="text-center py-8">
            <p>Resize window and see breakpoint update live.</p>
          </div>
        </PageFooter>
      </PageLayout>
    );
  },
  name: 'Responsive Layout (with useBreakpoint)',
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates usage of the useBreakpoint hook for responsive layouts.',
      },
    },
  },
};

export const ThemeSwitchDarkMode: Story = {
  render: () => {
    const { isDarkMode, toggle } = useDarkMode();
    return (
      <div className={`transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
        <PageLayout variant="default" maxWidth="xl">
          <PageHeader>
            <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between h-16">
              <span className="font-bold text-xl text-gray-900 dark:text-gray-100">
                Theme Switch/Dark Mode
              </span>
              <Button variant="ghost" onClick={toggle}>
                {isDarkMode ? 'Switch to Light' : 'Switch to Dark'}
              </Button>
            </nav>
          </PageHeader>
          <PageContent maxWidth="lg" className="py-12">
            <Card>
              <CardHeader>
                <CardTitle>
                  {isDarkMode ? 'Dark Mode Active' : 'Light Mode Active'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  This layout uses the Beyond-UI dark mode hook for theme switching.
                </p>
              </CardContent>
            </Card>
          </PageContent>
          <PageFooter variant="simple">
            <div className="text-center py-8">
              <p className="text-gray-600 dark:text-gray-300">&copy; 2025 Beyond-UI Demo.</p>
            </div>
          </PageFooter>
        </PageLayout>
      </div>
    );
  },
  name: 'Theme Switch/Dark Mode',
  parameters: {
    docs: {
      description: {
        story: `
Toggle between light and dark theme using Beyond-UI's useDarkMode hook.
For production, ensure Tailwind's 'dark:' variants are used with semantic tokens, and theme switching affects only the UI as desired.
        `,
      },
    },
  },
};