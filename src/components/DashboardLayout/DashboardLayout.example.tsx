import * as React from "react";
import { DashboardLayout } from "./DashboardLayout";

export const DashboardLayoutExample: React.FC = () => (
  <DashboardLayout sidebarTitle="Mazao" sidebarTitleLetter="A">
    <div className="p-4">This is the dashboard content area.</div>
  </DashboardLayout>
);