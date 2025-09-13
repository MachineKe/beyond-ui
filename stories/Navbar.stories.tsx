import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "../src/components/Navbar";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Navbar>
      <div className="flex items-center gap-4 px-4">
        <span className="font-bold text-xl">My App</span>
        <nav className="flex gap-2 ml-auto">
          <a href="#" className="text-blue-500">Home</a>
          <a href="#" className="text-blue-500">About</a>
        </nav>
      </div>
    </Navbar>
  ),
};