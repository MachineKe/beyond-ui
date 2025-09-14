import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "../src/components/Navbar";
import { Avatar, AvatarImage, AvatarFallback } from "../src/components/Avatar";

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

export const AppBarUseCase: Story = {
  render: () => (
    <Navbar>
      <div className="flex items-center w-full px-4 py-2">
        <span className="font-bold text-2xl text-primary-700">TeamSuite</span>
        <nav className="flex gap-3 ml-10">
          <a href="#" className="text-gray-700 hover:text-primary-700">Dashboard</a>
          <a href="#" className="text-gray-700 hover:text-primary-700">Projects</a>
          <a href="#" className="text-gray-700 hover:text-primary-700">Settings</a>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <button className="text-sm text-gray-600 hover:text-primary-700">Support</button>
          <Avatar size="sm">
            <AvatarImage src="https://randomuser.me/api/portraits/men/44.jpg" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </Navbar>
  ),
  name: "App Bar (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story:
          "A responsive app bar with brand, navigation links, actions, and user avatar for quick navigation and identity.",
      },
    },
  },
};