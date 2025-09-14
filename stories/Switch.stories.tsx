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

export const SettingsPanelUseCase: Story = {
  render: () => {
    const [notif, setNotif] = React.useState(true);
    const [dark, setDark] = React.useState(false);
    return (
      <div className="bg-gray-50 p-4 w-72 rounded-lg flex flex-col gap-5">
        <div className="font-semibold mb-1">Settings</div>
        <label className="flex items-center gap-2 justify-between">
          <span>Enable Notifications</span>
          <Switch checked={notif} onCheckedChange={setNotif} />
        </label>
        <label className="flex items-center gap-2 justify-between">
          <span>Dark Mode</span>
          <Switch checked={dark} onCheckedChange={setDark} />
        </label>
        <span className="mt-2 text-xs text-gray-500">
          Notifications: {notif ? "On" : "Off"} | Theme: {dark ? "Dark" : "Light"}
        </span>
      </div>
    );
  },
  name: "Settings Panel (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story:
          "A settings panel with two tracked switches: notifications and dark mode, showing real value state.",
      },
    },
  },
};