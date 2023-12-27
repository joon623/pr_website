import { Box } from "@mui/system";
import {
  AboutSection,
  ContactSection,
  HomeComponent,
  SkillSection,
  WorkExperiences,
} from "@/components/organisms";

export default function HomeTemplate() {
  return (
    <Box className="root" component={"main"}>
      <HomeComponent />
      <AboutSection />
      <WorkExperiences />
      <SkillSection />
      <ContactSection />
    </Box>
  );
}
