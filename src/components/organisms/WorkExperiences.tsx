"use client";

import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { mediaQueryInput } from "@/styles/breakpoint";
import Title from "@/components/atoms/Title";
import { v4 } from "uuid";
import { WorkCard } from "@/components/mocules";

interface WorkExperiencesProps {
  experiences: {
    date: string;
    title: string;
    role: string;
    content: string[];
    tags: string[];
  }[];
}

function WorkExperiences({ experiences }: WorkExperiencesProps) {
  const matches = useMediaQuery(mediaQueryInput);

  return (
    <Box
      padding={"300px 0px 100px"}
      display={matches ? "flex" : "auto"}
      gap={"3rem"}
      component={"section"}
    >
      <Box
        position={matches ? "sticky" : "static"}
        alignSelf={"flex-start"}
        top={"6rem"}
        display={"flex"}
        justifyContent={"center"}
        marginBottom={"1.5rem"}
      >
        <Title title={"Work\nExperience"} />
      </Box>
      <Box>
        {experiences.map((work) => (
          <WorkCard
            key={v4()}
            role={work.role}
            date={work.date}
            title={work.title}
            content={work.content}
            tags={work.tags}
          />
        ))}
      </Box>
    </Box>
  );
}

export default WorkExperiences;
