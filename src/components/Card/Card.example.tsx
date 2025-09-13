import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./Card";

export const CardExample: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Card>
      <CardHeader>
        <CardTitle>Default Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">This is a default card with standard styling.</p>
      </CardContent>
    </Card>
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">This card has elevated shadow styling.</p>
      </CardContent>
    </Card>
  </div>
);