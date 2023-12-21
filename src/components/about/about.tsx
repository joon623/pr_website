"use client";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { themeStyles } from "@/styles/theme";
import { useRef } from "react";
import { motion } from "framer-motion";
import styles from "./about.module.css";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  const ref = useRef(null);

  return (
    <Box
      margin={"150px auto 0px"}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      height={"800px"}
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
            className={styles.text}
          >
            &quot;Habit is life, and attitude is everything.&quot;
          </Typography>
          <Typography
            color={themeStyles.color.primary.floralWhite}
            maxWidth={"560px"}
          >
            <TypeAnimation
              sequence={[
                "I quickly develop and solve problems by any means for business success. I sacrifice for the team to produce results. Even at the beginning, I swiftly learn and immediately apply it to work.",
              ]}
              speed={{ type: "keyStrokeDelayInMs", value: 30 }}
              omitDeletionAnimation={true}
            ></TypeAnimation>
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default About;
