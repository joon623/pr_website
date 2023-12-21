"use client";

import { Box } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import { mediaQueryInput } from "@/styles/breakpoint";
import WorkTags from "@/components/tags/WorkTags";
import { motion } from "framer-motion";

interface WorkCardProps {
  date: string;
  title: string;
  content: string;
  tags: string[];
}

function WorkCard() {
  const matches = useMediaQuery(mediaQueryInput);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -20 }}
      transition={{
        duration: 1,
      }}
      style={{ position: "relative", top: "80px" }} // 초기 위치 조정
    >
      <Box
        display={matches ? "flex" : "auto"}
        height={matches ? "45vh" : "auto"}
        marginBottom={"50px"}
        justifyContent={"space-between"}
        alignItems={"start"}
        gap={"20px"}
      >
        <Box
          color={"#64748B"}
          fontSize={"0.75rem"}
          width={"max-content"}
          flex={2}
        >
          2023 - PRESENT
        </Box>
        <Box color={"#E2E88F0"} flex={8}>
          <Box marginTop={matches ? "0px" : "0.5rem"}>B2B Sass Dashboard</Box>
          <Box
            marginTop={"0.5rem"}
            component="p"
            color={"#94a4b8"}
            fontSize={".875rem"}
          >
            Deliver high-quality, robust production code for a diverse array of
            projects for clients including Harvard Business School, Everytown
            for Gun Safety, Pratt Institute, Koala Health, Vanderbilt
            University, The 19th News, and more. Provide leadership within
            engineering department through close collaboration, knowledge
            shares, and mentorship.
          </Box>
          <Box marginTop={"0.5rem"} />
          <Box display={"flex"} gap={"0.75rem"} flexWrap={"wrap"}>
            <WorkTags name={"React"} />
            <WorkTags name={"React"} />
            <WorkTags name={"React"} />
            <WorkTags name={"React"} />
            <WorkTags name={"React"} />
            <WorkTags name={"React"} />
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default WorkCard;
