import * as React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardContent } from '../src/components/Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated'],
    },
    padding: {
      control: 'select',
      options: ['md'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Default Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">This is a default card with standard styling.</p>
      </CardContent>
    </Card>
  ),
};

export const Elevated: Story = {
  render: () => (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">This card has elevated shadow styling.</p>
      </CardContent>
    </Card>
  ),
};

export const Group: Story = {
  render: () => (
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
  ),
};

export const DashboardCardsUseCase: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <span className="text-2xl font-bold">$18,500</span>
          <p className="text-success-600 mt-2">+2.1% vs last week</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <span className="text-xl">5 New Alerts</span>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <span className="font-semibold">Jane Doe</span>
            <p className="text-gray-500">jane@company.com</p>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
  name: "Dashboard Cards (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story:
          "Simulates a dashboard with different types of cards for stats, notifications, and user profile.",
      },
    },
  },
};