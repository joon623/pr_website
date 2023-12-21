"use client";

import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { WorkCard } from "@/components/cards";
import { mediaQueryInput } from "@/styles/breakpoint";

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
        <Typography color={"#fff8ee"} variant={"h2"}>
          Work
          <br /> Experience
        </Typography>
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
