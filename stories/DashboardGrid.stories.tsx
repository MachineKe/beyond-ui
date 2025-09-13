import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DashboardGrid } from "../src/components/DashboardGrid";

const meta = {
  title: "Components/DashboardGrid",
  component: DashboardGrid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DashboardGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DashboardGrid>
      <div className="p-4 bg-gray-100 rounded">Widget 1</div>
      <div className="p-4 bg-gray-100 rounded">Widget 2</div>
      <div className="p-4 bg-gray-100 rounded">Widget 3</div>
      <div className="p-4 bg-gray-100 rounded">Widget 4</div>
    </DashboardGrid>
  ),
};