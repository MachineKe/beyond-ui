import * as React from "react";
import { LogOut } from "lucide-react";
import { Button } from "../Button";
import { useAuth } from "../../contexts/AuthContext";

/**
 * LogoutButton
 * - Dual API: context-aware (uses useAuth) and stateless (accepts onLogout prop).
 * - If onLogout prop is provided, uses it; otherwise, falls back to useAuth.
 * - Theme-agnostic, reusable.
 */
export interface LogoutButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onLogout?: () => void;
}

export const LogoutButton = React.forwardRef<HTMLButtonElement, LogoutButtonProps>(
  ({ className, onLogout, ...props }, ref) => {
    // Only call useAuth if onLogout prop is not provided
    let contextLogout: (() => void) | undefined;
    if (!onLogout) {
      try {
        const context = useAuth();
        if (context.logout) {
          contextLogout = context.logout;
        }
      } catch {
        // If context is missing, contextLogout remains undefined
      }
    }
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (props.onClick) props.onClick(e);
      if (onLogout) {
        onLogout();
      } else if (contextLogout) {
        contextLogout();
      }
    };
    return (
      <Button
        ref={ref}
        variant="danger"
        size="sm"
        className={className}
        onClick={handleClick}
        {...props}
      >
        <LogOut className="h-3 w-3 mr-1" />
        Logout
      </Button>
    );
  }
);

LogoutButton.displayName = "LogoutButton";