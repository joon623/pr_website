import { Navigation } from "@/components/nav/index";
import { HomeComponent } from "@/components/home";
import { About } from "@/components/about";
import { Work } from "@/components/work";
import Contact from "@/components/contact/contact";
import "./globals.css";
import { Box } from "@mui/system";

export default function Home() {
  return (
    <Box className="root">
      <Navigation />
      <HomeComponent />
      <About />
      <Work />
      <Contact />
    </Box>
  );
}
