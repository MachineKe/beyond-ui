import * as React from "react";
import { Alert, AlertTitle, AlertDescription } from "./Alert";

export const AlertExample: React.FC = () => (
  <div className="space-y-4">
    <Alert variant="info">
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>This is an informational alert message.</AlertDescription>
    </Alert>
    <Alert variant="success">
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>Operation completed successfully!</AlertDescription>
    </Alert>
    <Alert variant="warning">
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>Please review your input before proceeding.</AlertDescription>
    </Alert>
    <Alert variant="danger">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Something went wrong. Please try again.</AlertDescription>
    </Alert>
  </div>
);