import { Navigation } from "@/components/nav/index";
import { HomeComponent } from "@/components/home";
import { About } from "@/components/about";
import { Work } from "@/components/work";
import Cursor from "@/components/cursor/cursor";

export default function Home() {
  return (
    <>
      <Navigation />
      <HomeComponent />
      <About />
      <Work />
      <Cursor />
    </>
  );
}
