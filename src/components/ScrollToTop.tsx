"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollToTop() {
  const pathname = usePathname();

  const scrollToAnchorWithOffset = (hash: string) => {
    const element = document.getElementById(hash);
    if (!element) return;

    const navbarHeight = Array.from(
      document.querySelectorAll<HTMLElement>("[data-navbar]")
    ).reduce((max, el) => {
      const height = el.getBoundingClientRect().height;
      return height > max ? height : max;
    }, 0);
    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight -
      8; // small gap so content isn't flush

    window.scrollTo({
      top: Math.max(top, 0),
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollToHashOrTop = () => {
      const { hash } = window.location;

      if (hash) {
        scrollToAnchorWithOffset(hash.slice(1));
        return;
      }

      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    requestAnimationFrame(scrollToHashOrTop);
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleHashChange = () => {
      const { hash } = window.location;
      if (!hash) return;

      scrollToAnchorWithOffset(hash.slice(1));
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return null;
}
