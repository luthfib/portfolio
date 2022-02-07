import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

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

export const useEventListener = (eventName, handler, element) => {
  // Create a ref that stores handler
  const savedHandler = useRef();

  useEffect(() => {
    // Define the listening target
    const targetElement = element?.current || window;
    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }

    // Update saved handler if necessary
    if (savedHandler.current !== handler) {
      savedHandler.current = handler;
    }

    // Create event listener that calls handler function stored in ref
    const eventListener = (event) => {
      // eslint-disable-next-line no-extra-boolean-cast
      if (!!savedHandler?.current) {
        savedHandler.current(event);
      }
    };

    targetElement.addEventListener(eventName, eventListener);

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element, handler]);
};

export const useAnimateOnViewport = (ref) => {
  useEffect(() => {
    const handler = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();

      const visible =
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight);

      return visible ? ref?.current.classList.add("animate") : "";
    };
    // Immediately call to handle use case where you are tab switching
    handler();

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [ref]);
};

export const useElementSize = () => {
  const [ref, setRef] = useState();
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  // Prevent too many rendering using useCallback
  const handleSize = useCallback(() => {
    setSize({
      width: ref?.offsetWidth || 0,
      height: ref?.offsetHeight || 0,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetHeight, ref?.offsetWidth]);

  useEventListener("resize", handleSize);

  useLayoutEffect(() => {
    handleSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetHeight, ref?.offsetWidth]);

  return [setRef, size];
};
