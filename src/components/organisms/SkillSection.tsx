"use client";

import { Box } from "@mui/system";
import { Title } from "@/components/atoms";
import { SkillOrbit } from "@/components/mocules";

interface SkillSectionProps {
  skills: { category: string; items: string[] }[];
}

function SkillSection({ skills }: SkillSectionProps) {
  return (
    <Box component={"section"} sx={{ paddingBottom: "6rem" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Title title={"Skills"} />
      </Box>
      <SkillOrbit skills={skills} />
    </Box>
  );
}

export default SkillSection;
