import * as React from "react";
import { Badge } from "./Badge";

export const BadgeExample: React.FC = () => (
  <div className="flex flex-wrap gap-2">
    <Badge>Default</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="danger">Danger</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="outline">Outline</Badge>
  </div>
);