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

export const SkeletonCardUseCase: Story = {
  render: () => (
    <div className="max-w-md w-full border rounded-lg shadow p-4 space-y-4 bg-white">
      <div className="flex items-center gap-4">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="flex-1">
          <Skeleton className="h-4 w-3/4 mb-2" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <Skeleton className="h-4 w-full mt-2" />
      <Skeleton className="h-6 w-2/3 mt-4" />
      <div className="flex gap-2">
        <Skeleton className="h-8 w-20 rounded" />
        <Skeleton className="h-8 w-20 rounded" />
      </div>
    </div>
  ),
  name: "Loading Card (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story:
          "Simulates a card loading state with skeletons for avatar, text, and action buttons.",
      },
    },
  },
};