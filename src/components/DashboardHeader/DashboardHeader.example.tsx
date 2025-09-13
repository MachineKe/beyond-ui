import * as React from "react";
import { DashboardHeader } from "./DashboardHeader";

export const DashboardHeaderExample: React.FC = () => (
  <DashboardHeader breadcrumbs={[{ label: "Dashboard" }, { label: "Insights" }]} />
);