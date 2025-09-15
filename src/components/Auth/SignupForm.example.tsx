import * as React from "react";
import { SignupForm } from "./SignupForm";
import { Card, CardHeader, CardTitle, CardContent } from "../Card";
import { AuthProvider } from "../../contexts/AuthContext";

export const SignupFormExample: React.FC = () => (
  <AuthProvider>
    <div className="flex items-center justify-center min-h-[400px] bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <SignupForm />
        </CardContent>
      </Card>
    </div>
  </AuthProvider>
);