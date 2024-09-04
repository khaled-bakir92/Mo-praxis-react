import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        scroller.scrollTo(location.hash.substring(1), {
          smooth: true,
          duration: 500,
          offset: -70,
        });
      }
    }
  }, [location]);

  return null;
};

export default ScrollToHashElement;