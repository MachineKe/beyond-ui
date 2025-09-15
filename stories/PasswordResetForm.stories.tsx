import type { Meta, StoryObj } from "@storybook/react";
import { PasswordResetForm } from "../src/components/Auth/PasswordResetForm";

const meta: Meta<typeof PasswordResetForm> = {
  title: "Auth/PasswordResetForm",
  component: PasswordResetForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  }
};

export default meta;

type Story = StoryObj<typeof PasswordResetForm>;

export const Default: Story = {
  args: {
    onReset: async (email: string) => {
      await new Promise((res) => setTimeout(res, 800));
      alert(`Requested reset for: ${email}`);
    }
  }
};