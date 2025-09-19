import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "../src/components/Auth/LoginForm";
import { AuthProvider } from "../src/contexts/AuthContext";
import React from "react";

const meta: Meta<typeof LoginForm> = {
  title: "Auth/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  decorators: [
    (Story) => <AuthProvider><Story /></AuthProvider>
  ]
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};