import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DashboardGrid } from "../src/components/DashboardGrid";
import { StatsCard } from "../src/components/StatsCard";
import { Bell, BarChart3 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../src/components/Card";
import { Badge } from "../src/components/Badge";

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

export const AnalyticsWidgetsUseCase: Story = {
  render: () => (
    <DashboardGrid>
      <StatsCard
        title="Total Users"
        value="2,534"
        trend={{ direction: "up", value: "+3.2%", label: "last week" }}
        icon={<BarChart3 className="h-6 w-6 text-primary-600" />}
      />
      <Card>
        <CardHeader>
          <CardTitle>Daily Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <span className="text-gray-400">[Insert Chart Component Here]</span>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-2">
            <Bell className="h-5 w-5 text-warning-600" />
            <Badge variant="warning">3 New</Badge>
          </div>
          <div className="text-sm text-gray-600">
            You have new system alerts and messages.
          </div>
        </CardContent>
      </Card>
    </DashboardGrid>
  ),
  name: "Analytics / Widgets Grid (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story:
          "Shows a dashboard grid with stats, chart, and notifications—mirroring a real analytics dashboard setup.",
      },
    },
  },
};