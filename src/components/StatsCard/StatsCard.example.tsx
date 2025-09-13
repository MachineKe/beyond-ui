import * as React from "react";
import { StatsCard } from "./StatsCard";
import { BarChart3 } from "lucide-react";

export const StatsCardExample: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <StatsCard
      title="Total Users"
      value="2,543"
      trend={{
        direction: "up",
        value: "+12%",
        label: "from last month"
      }}
      icon={<BarChart3 className="h-6 w-6 text-primary-600" />}
    />
    <StatsCard
      variant="gradient"
      color="success"
      title="Revenue"
      value="$45,231"
      trend={{
        direction: "up",
        value: "+8.2%",
        label: "from last month"
      }}
      icon={<BarChart3 className="h-6 w-6" />}
    />
  </div>
);