import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component is made to keep every page loading at the top.  Since we are using react router, every time we go to a
// new page, the browser isn't reloading, so it keeps the same scroll position on every page you go to.  Adding this 
// component to our App component fixes this

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}