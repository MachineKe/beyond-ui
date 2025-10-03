import { useEffect } from "react";

/**
 * Reusable hook to scroll window or a container to top when dependencies change.
 * - If a ref is provided, scrolls the container.
 * - Otherwise, scrolls the window.
 * - Designed for use in product/detail views to ensure correct navigation UX.
 *
 * @param deps Dependency array (e.g., [product])
 * @param ref Optional: React ref to a scrollable container
 */
export function useScrollToTop(deps: any[] = [], ref?: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (ref?.current) {
      ref.current.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}