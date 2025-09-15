import type { Meta, StoryObj } from "@storybook/react";
import { SignupForm } from "../src/components/Auth/SignupForm";

const meta: Meta<typeof SignupForm> = {
  title: "Auth/SignupForm",
  component: SignupForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  }
};

export default meta;

type Story = StoryObj<typeof SignupForm>;

export const Default: Story = {};