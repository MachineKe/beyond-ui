import * as React from "react";
import { Button } from "../Button";

/**
 * Simple demo: toggling a boolean to represent authenticated/unauthenticated.
 * This does NOT call login/logout to avoid backend/service dependencies,
 * and simply shows protected content or a message.
 */
export const ProtectedRouteExample: React.FC = () => {
  const [authed, setAuthed] = React.useState(false);

  return (
    <div className="flex flex-col items-center gap-4 p-8 border rounded bg-background max-w-md mx-auto min-h-[200px]">
      <div>
        <Button onClick={() => setAuthed((prev) => !prev)}>
          {authed ? "Logout" : "Login (Preview)"}
        </Button>
      </div>
      {authed ? (
        <div className="p-4 text-success-700 bg-success-50 border border-success-200 rounded">
          This content is only visible if authenticated!
        </div>
      ) : (
        <div className="p-4 text-danger-700 bg-danger-50 border border-danger-200 rounded">
          You must be logged in to view protected content.
        </div>
      )}
    </div>
  );
};