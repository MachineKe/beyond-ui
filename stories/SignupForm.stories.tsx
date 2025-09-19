import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SignupForm } from "../src/components/Auth/SignupForm";
import { AuthProvider } from "../src/contexts/AuthContext";

const meta: Meta<typeof SignupForm> = {
  title: "Auth/SignupForm",
  component: SignupForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  decorators: [
    (Story) => <AuthProvider><Story /></AuthProvider>
  ]
};

export default meta;

type Story = StoryObj<typeof SignupForm>;

export const Default: Story = {};