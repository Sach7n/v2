import { useEffect, useRef } from "react";
import Hero from "../Components/Home/Hero";
import Experience from "../Components/Home/Experience";
import Work from "../Components/Home/Work";
import Social from "../Components/general/Social";
import About from "../Components/Home/About";
import ResponsiveSection from "../Components/general/ResponsiveSection";
import Box from "@mui/material/Box";
import { useMediaQuery, useTheme } from "@mui/material";

const sections = [
  {
    id: "home",
    component: <Hero />,
    animationConfig: { delay: 0.1 },
  },
  {
    id: "about",
    component: <About />,
    animationConfig: { delay: 0.2 },
  },
  {
    id: "experience",
    component: <Experience />,
    animationConfig: { delay: 0.2 },
  },
  {
    id: "work",
    component: <Work displayMode="carousel" />,
    animationConfig: { delay: 0.2 },
  },
];

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Disable custom scroll behavior on mobile to prevent conflicts
    if (isMobile) return;

    let index = 0;
    let isScrolling = false;

    const scrollToSection = (i: number) => {
      if (i >= 0 && i < sectionRefs.current.length) {
        sectionRefs.current[i]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Only handle wheel events on desktop
      if (isScrolling || isMobile) return;

      e.preventDefault(); // Prevent default scroll
      isScrolling = true;

      // Shorter timeout to make scrolling feel more responsive
      setTimeout(() => (isScrolling = false), 800);

      if (e.deltaY > 0 && index < sections.length - 1) {
        index++;
        scrollToSection(index);
      } else if (e.deltaY < 0 && index > 0) {
        index--;
        scrollToSection(index);
      }
    };

    // Only add wheel listener on desktop
    if (!isMobile) {
      window.addEventListener("wheel", handleWheel, { passive: false });

      return () => {
        window.removeEventListener("wheel", handleWheel);
      };
    }
  }, [isMobile]);

  return (
    <>
      {sections.map(({ id, component, animationConfig }, i) => (
        <Box
          key={id}
          ref={(el) => {
            if (el) sectionRefs.current[i] = el;
          }}
          sx={{
            // Ensure sections don't interfere with each other
            position: "relative",
            zIndex: 1,
          }}
        >
          <ResponsiveSection
            height={"100vh"}
            id={id}
            animateOnScroll={!isMobile} // Disable scroll animations on mobile
            animationConfig={animationConfig}
          >
            {component}
          </ResponsiveSection>
        </Box>
      ))}

      <Social />
    </>
  );
}
