"use client";

import { Box } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import { mediaQueryInput } from "@/styles/breakpoint";
import WorkTags from "@/components/tags/WorkTags";
import { motion } from "framer-motion";
import { v4 } from "uuid";

interface WorkCardProps {
  date: string;
  title: string;
  role: string;
  content: string;
  tags: string[];
}

function WorkCard({ date, title, role, content, tags }: WorkCardProps) {
  const matches = useMediaQuery(mediaQueryInput);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -20 }}
      transition={{
        duration: 1,
      }}
      style={{ position: "relative", top: "80px" }}
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
          {date}
        </Box>
        <Box color={"#E2E88F0"} flex={8}>
          <Box marginTop={matches ? "0px" : "0.5rem"}>{title}</Box>
          <Box
            marginTop={matches ? "5px" : "0.5rem"}
            color={"rgb(207, 204, 198)"}
            fontSize={"12px"}
          >
            {role}
          </Box>
          <Box
            marginTop={"0.5rem"}
            component="div"
            color={"#94a4b8"}
            fontSize={".875rem"}
          >
            <ul>
              {content.split("\n").map((item) => (
                <li key={v4()}>{item}</li>
              ))}
            </ul>
          </Box>
          <Box marginTop={"0.5rem"} />
          <Box display={"flex"} gap={"0.75rem"} flexWrap={"wrap"}>
            {tags.map((tag) => (
              <WorkTags name={tag} key={v4()} />
            ))}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default WorkCard;
