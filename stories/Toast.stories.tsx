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