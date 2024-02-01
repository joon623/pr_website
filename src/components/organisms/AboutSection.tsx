"use client";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { themeStyles } from "@/styles/theme";
import { useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

interface AboutSectionProps {
  title: string;
  content: string;
}

const AboutSection = ({ title, content }: AboutSectionProps) => {
  const ref = useRef(null);

  return (
    <Box
      margin={"150px auto 0px"}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      height={"1200px"}
    >
      <Box position={"sticky"} top={"50%"} ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 2,
          }}
        >
          <Typography
            variant={"h5"}
            gutterBottom
            textAlign={"center"}
            style={{
              background:
                "linear-gradient(96.77deg, rgb(249, 106, 25) -0.96%, rgb(251, 96, 189) 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {title}
          </Typography>
          <Typography
            color={themeStyles.color.primary.floralWhite}
            maxWidth={"560px"}
          >
            <TypeAnimation
              sequence={[content]}
              speed={{ type: "keyStrokeDelayInMs", value: 30 }}
              omitDeletionAnimation={true}
            />
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default AboutSection;
