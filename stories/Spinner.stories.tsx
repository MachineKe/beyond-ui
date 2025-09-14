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

export const LoadingOverlayUseCase: Story = {
  render: () => {
    const [loading, setLoading] = React.useState(false);
    const fetchData = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };
    return (
      <div className="relative w-96 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
        {loading && (
          <div className="absolute inset-0 bg-gray-200 bg-opacity-60 flex items-center justify-center z-10">
            <Spinner className="h-8 w-8" />
          </div>
        )}
        <div className="z-0 flex flex-col gap-2 items-center">
          <span>Page Content Here</span>
          <Button onClick={fetchData} disabled={loading}>
            {loading ? "Loading..." : "Fetch new data"}
          </Button>
        </div>
      </div>
    );
  },
  name: "Loading Overlay (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story:
          "Spinner displays over content while asynchronous fetch is in progress, as in typical loading overlays.",
      },
    },
  },
};