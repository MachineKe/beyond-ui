import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../src/components/Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'success'],
    },
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    placeholder: 'Enter text...',
    value: 'Invalid input',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    placeholder: 'Enter text...',
    value: 'Valid input',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input inputSize="sm" placeholder="Small input" />
      <Input inputSize="md" placeholder="Medium input" />
      <Input inputSize="lg" placeholder="Large input" />
    </div>
  ),
};