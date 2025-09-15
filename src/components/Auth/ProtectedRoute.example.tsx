import * as React from "react";
import { ProtectedRoute } from "./ProtectedRoute";
import { Button } from "../Button";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";
import { MemoryRouter } from "react-router-dom";

/**
 * This showcase demos ProtectedRoute by toggling authentication using the real context,
 * wrapped in a MemoryRouter to support react-router hooks.
 */
const ShieldContent: React.FC = () => {
  const { isAuthenticated, login, logout } = useAuth();

  const handleAuth = () => {
    if (isAuthenticated) {
      logout();
    } else {
      login({ email: "demo@beyond.ui", password: "demo" });
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8 border rounded bg-background max-w-md mx-auto min-h-[200px]">
      <div>
        <Button onClick={handleAuth}>
          {isAuthenticated ? "Logout" : "Login (Demo)"}
        </Button>
      </div>
      <ProtectedRoute>
        <div className="p-4 text-success-700 bg-success-50 border border-success-200 rounded">
          This content is only visible if authenticated!
        </div>
      </ProtectedRoute>
      {!isAuthenticated && (
        <div className="p-4 text-danger-700 bg-danger-50 border border-danger-200 rounded">
          You must be logged in to view protected content.
        </div>
      )}
    </div>
  );
};

export const ProtectedRouteExample: React.FC = () => (
  <MemoryRouter>
    <AuthProvider>
      <ShieldContent />
    </AuthProvider>
  </MemoryRouter>
);