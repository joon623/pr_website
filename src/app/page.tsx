import { HomeComponent } from "@/components/home";
import { About } from "@/components/about";
import { Work } from "@/components/work";
import Contact from "@/components/contact/contact";
import { Box } from "@mui/system";
import { Skills } from "@/components/skills";
import "./globals.css";

export default function Home() {
  return (
    <Box className="root" component={"main"}>
      <HomeComponent />
      <About />
      <Work />
      <Skills />
      <Contact />
    </Box>
  );
}
