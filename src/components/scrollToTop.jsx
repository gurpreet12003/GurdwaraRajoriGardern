import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const scrollToHash = () => {
        const element = document.getElementById(hash.replace("#", ""));

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

      setTimeout(scrollToHash, 300);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [pathname, hash]);

  return null;
}