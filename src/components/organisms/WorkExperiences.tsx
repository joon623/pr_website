"use client";

import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { mediaQueryInput } from "@/styles/breakpoint";
import Title from "@/components/atoms/Title";
import { WorkCard } from "@/components/mocules";
import { tokens } from "@/styles/theme";

interface WorkExperiencesProps {
  experiences: {
    date: string;
    title: string;
    role: string;
    highlights: { value: string; label: string }[];
    content: string[];
    tags: string[];
  }[];
}

function WorkExperiences({ experiences }: WorkExperiencesProps) {
  const matches = useMediaQuery(mediaQueryInput);

  return (
    <Box
      component={"section"}
      sx={{
        padding: "300px 0px 100px",
        display: matches ? "flex" : "block",
        gap: "3rem",
      }}
    >
      <Box
        sx={{
          position: matches ? "sticky" : "static",
          alignSelf: "flex-start",
          top: "6rem",
          display: "flex",
          justifyContent: "center",
          marginBottom: "1.5rem",
        }}
      >
        <Title title={"Work\nExperience"} />
      </Box>
      {/* timeline */}
      <Box
        sx={{
          position: "relative",
          flex: 1,
          paddingLeft: "2.75rem",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "1rem",
            bottom: "1rem",
            left: "1rem",
            width: "1px",
            background: tokens.gradient.timeline,
          },
        }}
      >
        {experiences.map((work) => (
          <WorkCard
            key={work.title}
            role={work.role}
            date={work.date}
            title={work.title}
            highlights={work.highlights}
            content={work.content}
            tags={work.tags}
          />
        ))}
      </Box>
    </Box>
  );
}

export default WorkExperiences;
