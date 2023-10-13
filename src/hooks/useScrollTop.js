import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function useScrollTop() {
  const location = useLocation();
  const ref = useRef();

  useEffect(() => {
    if (!location.hash) ref.current.scrollTop = 0;
  }, [location]);

  return ref;
}
