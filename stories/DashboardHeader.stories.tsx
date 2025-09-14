import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DashboardHeader } from "../src/components/DashboardHeader";
import { Button } from "../src/components/Button";

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

export const HeaderWithActionsUseCase: Story = {
  render: () => (
    <DashboardHeader
      breadcrumbs={[{ label: "Home", href: "#" }, { label: "Reports" }]}
      actions={
        <Button variant="primary" size="sm">
          Add Widget
        </Button>
      }
      title="Reports Overview"
      description="Track, measure, and export all key analytics for your organization."
    />
  ),
  name: "Header With Actions (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story:
          "A page header with breadcrumbs, title, subtitle/description, and an actions slot for page-level buttons.",
      },
    },
  },
};