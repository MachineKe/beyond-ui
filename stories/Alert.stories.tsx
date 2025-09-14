import * as React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from '../src/components/Alert';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  render: () => (
    <Alert variant="info">
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>This is an informational alert.</AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  render: () => (
    <Alert variant="success">
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>Operation completed successfully!</AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  render: () => (
    <Alert variant="warning">
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>Please review your input before proceeding.</AlertDescription>
    </Alert>
  ),
};

export const Danger: Story = {
  render: () => (
    <Alert variant="danger">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Something went wrong.</AlertDescription>
    </Alert>
  ),
};

export const FormErrorsUseCase: Story = {
  render: () => (
    <form className="w-80 flex flex-col gap-2 p-4 bg-gray-50 rounded-lg">
      <Alert variant="danger">
        <AlertTitle>Form Error</AlertTitle>
        <AlertDescription>
          Your password must be at least 8 characters. Please try again.
        </AlertDescription>
      </Alert>
      <input
        className="border-b border-gray-300 bg-transparent p-2 rounded focus:border-primary-600"
        placeholder="Username"
      />
      <input
        className="border-b border-gray-300 bg-transparent p-2 rounded focus:border-primary-600"
        placeholder="Password"
        type="password"
      />
    </form>
  ),
  name: "Form Error (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates Alert component used to display form errors above form fields, typical in UI form validation.",
      },
    },
  },
};