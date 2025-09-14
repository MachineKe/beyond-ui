import * as React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../src/components/Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Checkbox>;

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

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4">
      <Checkbox size="sm" /> <Checkbox size="md" /> <Checkbox size="lg" />
    </div>
  ),
};

export const FilterPanelUseCase: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<string[]>(["inbox"]);
    const filters = [
      { id: "inbox", label: "Inbox" },
      { id: "starred", label: "Starred" },
      { id: "archived", label: "Archived" },
    ];
    const toggle = (id: string) => {
      setSelected(sel =>
        sel.includes(id) ? sel.filter(x => x !== id) : [...sel, id]
      );
    };

    return (
      <div className="bg-gray-50 p-4 w-60 rounded-lg flex flex-col gap-2">
        <div className="font-semibold mb-1">Filters</div>
        {filters.map(opt => (
          <label key={opt.id} className="flex items-center gap-2 cursor-pointer">
            <Checkbox
              checked={selected.includes(opt.id)}
              onCheckedChange={() => toggle(opt.id)}
              size="md"
            />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>
    );
  },
  name: "Filter Panel (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story:
          "Real-world example using checkboxes to drive a UI filtering panel.",
      },
    },
  },
};