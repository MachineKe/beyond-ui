import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "../src/components/Sidebar";

const meta = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const demoMenu = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <span>D</span>,
    href: "#",
  },
  {
    id: "settings",
    label: "Settings",
    icon: <span>S</span>,
    href: "#",
  },
];

export const Default: Story = {
  render: () => <Sidebar menuItems={demoMenu} />,
};