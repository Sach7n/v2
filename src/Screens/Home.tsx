import { useEffect, useRef } from "react";
import Hero from "../Components/Home/Hero";
import Experience from "../Components/Home/Experience";
import Work from "../Components/Home/Work";
import Social from "../Components/general/Social";
import About from "../Components/Home/About";
import ResponsiveSection from "../Components/general/ResponsiveSection";
import Box from "@mui/material/Box";

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
    animationConfig: { delay: 0.3 },
  },
  {
    id: "work",
    component: <Work />,
    animationConfig: { delay: 0.3 },
  },
];

export default function Home() {
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let index = 0;
    let isScrolling = false;

    const scrollToSection = (i: number) => {
      if (i >= 0 && i < sectionRefs.current.length) {
        sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth" });
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      isScrolling = true;
      setTimeout(() => (isScrolling = false), 1000);

      if (e.deltaY > 0 && index < sections.length - 1) {
        index++;
        scrollToSection(index);
      } else if (e.deltaY < 0 && index > 0) {
        index--;
        scrollToSection(index);
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <>
      {sections.map(({ id, component, animationConfig }, i) => (
        <Box key={id}>
          <ResponsiveSection
            height={"100vh"}
            id={id}
            animateOnScroll
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
