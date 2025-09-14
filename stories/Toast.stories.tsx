import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toast, showToast } from "../src/components/Toast";
import { Button } from "../src/components/Button";

const meta = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <Button onClick={() => showToast.success("This is a toast notification!")}>
        Show Toast
      </Button>
      <Toast />
    </>
  ),
};

export const ToastAfterForm: Story = {
  render: () => {
    const [email, setEmail] = React.useState("");
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!email.includes("@")) {
        showToast.error("Invalid email!");
      } else {
        showToast.success("Subscribed successfully!");
        setEmail("");
      }
    };
    return (
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex gap-2 items-center p-4 bg-gray-50 rounded-lg w-80"
        >
          <input
            className="flex-1 border border-gray-200 rounded px-2 py-1"
            placeholder="Enter your email..."
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Button type="submit" size="sm">
            Subscribe
          </Button>
        </form>
        <Toast />
      </div>
    );
  },
  name: "Toast after Form Submit (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates using Toast for real feedback when submitting a form (success or validation error).",
      },
    },
  },
};