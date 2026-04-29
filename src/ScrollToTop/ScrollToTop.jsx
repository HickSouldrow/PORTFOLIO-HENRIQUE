import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {

    window.scrollTo(0, 0);


    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 150);
  }, [pathname]);

  return null;
}
