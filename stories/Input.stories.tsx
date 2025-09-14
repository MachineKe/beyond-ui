import * as React from "react";
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
      options: ['default', 'success', 'error'],
    },
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Default input',
  },
};

export const Success: Story = {
  args: {
    placeholder: 'Success state',
    variant: 'success',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Error state',
    variant: 'error',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-2">
      <Input placeholder="Small" inputSize="sm" />
      <Input placeholder="Medium" inputSize="md" />
      <Input placeholder="Large" inputSize="lg" />
    </div>
  ),
};

export const FormUseCase: Story = {
  render: () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [error, setError] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!email.includes("@")) setError(true);
      else setError(false);
    };

    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-64 bg-gray-50 p-4 rounded-lg">
        <Input
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          inputSize="md"
          value={email}
          variant={error ? "error" : "default"}
          onChange={e => setEmail(e.target.value)}
        />
        {error && (
          <span className="text-danger-600 text-xs mt-1">Please enter a valid email address.</span>
        )}
        <button type="submit" className="mt-2 bg-primary-600 text-white py-2 px-4 rounded-md">
          Submit
        </button>
      </form>
    );
  },
  name: "Simple Form (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates Inputs in action within a small controlled form with error validation and submit button.",
      },
    },
  },
};