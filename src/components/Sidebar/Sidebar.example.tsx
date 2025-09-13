import * as React from "react";
import { Sidebar } from "./Sidebar";
import type { MenuItem } from "./Sidebar";

const demoMenu: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <span>D</span>,
    href: "#"
  },
  {
    id: "settings",
    label: "Settings",
    icon: <span>S</span>,
    href: "#"
  }
];

export const SidebarExample: React.FC = () => (
  <Sidebar menuItems={demoMenu} />
);