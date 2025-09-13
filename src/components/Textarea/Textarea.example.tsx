import * as React from "react";
import { Textarea } from "./Textarea";

export const TextareaExample: React.FC = () => (
  <div className="space-y-4 max-w-md">
    <Textarea placeholder="Default textarea" />
    <Textarea placeholder="Success state" variant="success" />
    <Textarea placeholder="Error state" variant="error" />
    <div className="space-y-2">
      <Textarea placeholder="Small (default)" />
      <Textarea placeholder="Disabled" disabled />
    </div>
  </div>
);