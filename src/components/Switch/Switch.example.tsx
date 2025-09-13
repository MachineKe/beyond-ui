import * as React from "react";
import { Switch } from "./Switch";

export const SwitchExample: React.FC = () => (
  <div className="space-y-2">
    <label className="flex items-center gap-2">
      <Switch /> <span>Default</span>
    </label>
    <label className="flex items-center gap-2">
      <Switch checked /> <span>Checked</span>
    </label>
    <label className="flex items-center gap-2">
      <Switch disabled /> <span>Disabled</span>
    </label>
    <label className="flex items-center gap-2">
      <Switch checked disabled /> <span>Checked & Disabled</span>
    </label>
  </div>
);