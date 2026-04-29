import { useContext } from "react";

import { AppContext } from "../contexts";

import { useEffect, useRef, useState } from "react";

export const useFadeOnView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisivel(true);
      },
      { threshold },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visivel };
};
