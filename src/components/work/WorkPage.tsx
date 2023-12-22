"use client";

import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { WorkCard } from "@/components/cards";
import { mediaQueryInput } from "@/styles/breakpoint";
import Title from "@/components/atoms/text/title";

function WorkPage() {
  const matches = useMediaQuery(mediaQueryInput);

  return (
    <Box
      padding={"300px 0px 100px"}
      display={matches ? "flex" : "auto"}
      gap={"3rem"}
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
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </Box>
    </Box>
  );
}

export default WorkPage;
