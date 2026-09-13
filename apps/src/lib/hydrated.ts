import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/** True once the client snapshot has hydrated (false during SSR + hydration). */
export function useHydrated() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

/** True only when the user has not requested reduced motion. */
export function useReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
