import * as React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../src/components/Textarea';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'error'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Default textarea',
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

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled',
    disabled: true,
  },
};