import * as React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../src/components/Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'success', 'danger', 'warning', 'outline'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const NotificationBadgesUseCase: Story = {
  render: () => (
    <div className="flex gap-4 items-center bg-gray-50 p-4 rounded-lg">
      <div className="flex items-center gap-1">
        <span>Inbox</span>
        <Badge variant="danger">5</Badge>
      </div>
      <div className="flex items-center gap-1">
        <span>Status</span>
        <Badge variant="success">Online</Badge>
      </div>
      <div className="flex items-center gap-1">
        <span>Warning</span>
        <Badge variant="warning">Expiring</Badge>
      </div>
      <div className="flex items-center gap-1">
        <span>Info</span>
        <Badge variant="secondary">New</Badge>
      </div>
    </div>
  ),
  name: "Notification/Status Badges (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story:
          "Showcases badges as notification counts, statuses, warnings, and info labels — modeling realistic UI scenarios.",
      },
    },
  },
};