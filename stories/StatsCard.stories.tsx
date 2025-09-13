import * as React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { StatsCard } from '../src/components/StatsCard';
import { BarChart3 } from "lucide-react";

const meta = {
  title: 'Components/StatsCard',
  component: StatsCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StatsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Total Users",
    value: "2,543",
    trend: {
      direction: "up",
      value: "+12%",
      label: "from last month",
    },
    icon: <BarChart3 className="h-6 w-6 text-primary-600" />,
  },
};

export const GradientSuccess: Story = {
  args: {
    variant: "gradient",
    color: "success",
    title: "Revenue",
    value: "$45,231",
    trend: {
      direction: "up",
      value: "+8.2%",
      label: "from last month",
    },
    icon: <BarChart3 className="h-6 w-6" />,
  },
};

export const Group: any = {
  render: () => (
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
  ),
};