import * as React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '../src/components/Spinner';
import { Button } from '../src/components/Button';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Spinner />,
};

export const Inline: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Spinner /> <span>Loading data...</span>
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <Button variant="primary" disabled>
      <Spinner className="mr-2 h-4 w-4" /> Processing
    </Button>
  ),
};