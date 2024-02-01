import { Box } from "@mui/system";
import {
  AboutSection,
  ContactSection,
  HomeComponent,
  SkillSection,
  WorkExperiences,
} from "@/components/organisms";

interface Experience {
  date: string;
  title: string;
  role: string;
  content: string[];
  tags: string[];
}

interface Skill {
  category: string;
  images: string[];
}

interface Contact {
  email: string;
  linkedIn: string;
  github: string;
}

interface HomeTop {
  job: string;
  name: string;
}

interface About {
  title: string;
  content: string;
}

interface HomeTemplateProps {
  homeTop: HomeTop;
  about: About;
  experiences: Experience[];
  skills: Skill[];
  contact: Contact;
}

export default async function HomeTemplate({
  homeTop,
  about,
  experiences,
  skills,
  contact,
}: HomeTemplateProps) {
  return (
    <Box className="root" component={"main"}>
      <HomeComponent job={homeTop.job} name={homeTop.name} />
      <AboutSection title={about.title} content={about.content} />
      <WorkExperiences experiences={experiences} />
      <SkillSection skills={skills} />
      <ContactSection
        email={contact.email}
        gitHub={contact.github}
        linkedIn={contact.linkedIn}
      />
    </Box>
  );
}
