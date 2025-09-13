import * as React from "react";
import { Checkbox } from "./Checkbox";

export const CheckboxExample: React.FC = () => (
  <div className="space-y-2">
    <label className="flex items-center gap-2">
      <Checkbox /> <span>Default</span>
    </label>
    <label className="flex items-center gap-2">
      <Checkbox checked /> <span>Checked</span>
    </label>
    <label className="flex items-center gap-2">
      <Checkbox disabled /> <span>Disabled</span>
    </label>
    <label className="flex items-center gap-2">
      <Checkbox size="sm" /> <span>Small</span>
    </label>
    <label className="flex items-center gap-2">
      <Checkbox size="lg" /> <span>Large</span>
    </label>
  </div>
);