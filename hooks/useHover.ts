import { useState, useRef, useEffect } from "react";

function useHover() {
  const [hovered, setHovered] = useState(false);

  function enter() {
    setHovered(true);
  }

  function leave() {
    setHovered(false);
  }

  const ref: any = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const instance = ref.current;
    instance.addEventListener("mouseenter", enter);
    instance.addEventListener("mouseleave", leave);

    return () => {
      instance.removeEventListener("mouseenter", enter);
      instance.removeEventListener("mouseleave", leave);
    };
  }, []);

  return [hovered, ref];
}

export default useHover;
