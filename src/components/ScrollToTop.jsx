
import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("ScrollToTop triggered on path:", pathname);
    // Use setTimeout to ensure the page has rendered
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }, 100);
  }, [pathname]);

  return null;
}