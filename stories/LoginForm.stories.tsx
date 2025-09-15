import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "../src/components/Auth/LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "Auth/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  }
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};