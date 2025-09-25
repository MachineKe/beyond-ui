import * as React from "react";
import { User } from "lucide-react";
import { Button } from "../Button";
import { useAuth } from "../../contexts/AuthContext";

/**
 * ProfileButton
 * - Dual API: context-aware (uses useAuth) and stateless (accepts user/onClick props).
 * - If user prop is provided, uses it; otherwise, falls back to useAuth.
 * - Theme-agnostic, reusable.
 */
export interface ProfileButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  user?: { name?: string; email?: string };
}

export const ProfileButton = React.forwardRef<HTMLButtonElement, ProfileButtonProps>(
  ({ className, user, ...props }, ref) => {
    // Only call useAuth if user prop is not provided
    let displayUser = user;
    if (!displayUser) {
      try {
        const context = useAuth();
        if (context.user) {
          displayUser = context.user;
        }
      } catch {
        // If context is missing, displayUser remains undefined
      }
    }
    return (
      <Button
        ref={ref}
        variant="secondary"
        size="sm"
        className={className}
        {...props}
      >
        <User className="h-3 w-3 mr-1" />
        Profile
      </Button>
    );
  }
);

ProfileButton.displayName = "ProfileButton";