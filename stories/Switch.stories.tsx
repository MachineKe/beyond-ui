import * as React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../src/components/Switch';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const All: Story = {
  render: () => (
    <div className="flex gap-4">
      <label className="flex items-center gap-2">
        <Switch /> <span>Default</span>
      </label>
      <label className="flex items-center gap-2">
        <Switch checked /> <span>Checked</span>
      </label>
      <label className="flex items-center gap-2">
        <Switch disabled /> <span>Disabled</span>
      </label>
      <label className="flex items-center gap-2">
        <Switch checked disabled /> <span>Checked & Disabled</span>
      </label>
    </div>
  ),
};