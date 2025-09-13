import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DashboardHeader } from "../src/components/DashboardHeader";

const meta = {
  title: "Components/DashboardHeader",
  component: DashboardHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DashboardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DashboardHeader breadcrumbs={[{ label: "Dashboard" }, { label: "Insights" }]} />
  ),
};