import * as React from "react";
import { Input } from "./Input";

export const InputExample: React.FC = () => (
  <div className="space-y-4 max-w-md">
    <Input placeholder="Default input" />
    <Input placeholder="Success state" variant="success" />
    <Input placeholder="Error state" variant="error" />
    <div className="space-y-2">
      <Input placeholder="Small" inputSize="sm" />
      <Input placeholder="Medium" inputSize="md" />
      <Input placeholder="Large" inputSize="lg" />
    </div>
  </div>
);