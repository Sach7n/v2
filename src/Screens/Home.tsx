import Hero from "../Components/Home/Hero";
import Experience from "../Components/Home/Experience";
import Work from "../Components/Home/Work";
import Social from "../Components/general/Social";
import About from "../Components/Home/About";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Social />
    </>
  );
}
