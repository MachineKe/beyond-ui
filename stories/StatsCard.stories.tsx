import type { Meta, StoryObj } from '@storybook/react';
import { StatsCard } from '../src/components/StatsCard';
import { Users, DollarSign, TrendingUp } from 'lucide-react';

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
    title: 'Total Users',
    value: '2,543',
    trend: {
      direction: 'up',
      value: '+12%',
      label: 'from last month',
    },
    icon: <Users className="h-6 w-6 text-primary-600" />,
  },
};

export const Revenue: Story = {
  args: {
    title: 'Revenue',
    value: '$45,231',
    trend: {
      direction: 'up',
      value: '+8.2%',
      label: 'from last month',
    },
    icon: <DollarSign className="h-6 w-6 text-success-600" />,
  },
};

export const GradientCards: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
      <StatsCard
        variant="gradient"
        color="primary"
        title="Total Users"
        value="2,543"
        trend={{
          direction: 'up',
          value: '+12%',
          label: 'from last month',
        }}
        icon={<Users className="h-6 w-6" />}
      />
      <StatsCard
        variant="gradient"
        color="success"
        title="Revenue"
        value="$45,231"
        trend={{
          direction: 'up',
          value: '+8.2%',
          label: 'from last month',
        }}
        icon={<DollarSign className="h-6 w-6" />}
      />
      <StatsCard
        variant="gradient"
        color="warning"
        title="Growth Rate"
        value="23.5%"
        trend={{
          direction: 'up',
          value: '+2.1%',
          label: 'from last month',
        }}
        icon={<TrendingUp className="h-6 w-6" />}
      />
    </div>
  ),
};