import { Navigation } from "@/components/nav/index";
import { HomeComponent } from "@/components/home";
import { About } from "@/components/about";

export default function Home() {
  return (
    <>
      <Navigation />
      <HomeComponent />
      <About />
    </>
  );
}
