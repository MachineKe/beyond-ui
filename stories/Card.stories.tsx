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