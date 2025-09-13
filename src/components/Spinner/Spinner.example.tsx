import * as React from "react";
import { Spinner } from "./Spinner";
import { Button } from "../Button";

export const SpinnerExample: React.FC = () => (
  <div className="space-y-4">
    <Spinner />
    <div className="flex gap-2 items-center">
      <Spinner /> <span>Loading data...</span>
    </div>
    <Button variant="primary" disabled>
      <Spinner className="mr-2 h-4 w-4" /> Processing
    </Button>
  </div>
);