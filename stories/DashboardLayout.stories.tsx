import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DashboardLayout } from "../src/components/DashboardLayout";

const meta = {
  title: "Components/DashboardLayout",
  component: DashboardLayout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DashboardLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: any = {
  render: () => (
    <DashboardLayout>
      <div className="p-4">This is the dashboard content area.</div>
    </DashboardLayout>
  ),
};