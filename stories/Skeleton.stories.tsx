import * as React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../src/components/Skeleton';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  render: () => <Skeleton className="h-8 w-1/2" />,
};

export const Group: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Skeleton className="h-8 w-1/2" />
      <Skeleton className="h-4 w-3/4" />
      <div className="flex gap-2">
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-8 w-32" />
      </div>
      <Skeleton className="h-24 w-full" />
    </div>
  ),
};