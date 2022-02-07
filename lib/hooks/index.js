import React, { useEffect } from "react";

export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export const useAnimateOnViewport = (ref) => {
  useEffect(() => {
    const handler = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();

      const visible =
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight);

      console.log("ANIMTE", visible);

      return visible ? ref?.current.classList.add("animate") : "";
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [ref]);
};
