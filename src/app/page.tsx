import { Navigation } from "@/components/nav/index";
import { HomeComponent } from "@/components/home";
import { About } from "@/components/about";
import { Work } from "@/components/work";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <HomeComponent />
      <About />
      <Work />
      <Contact />
    </>
  );
}
