"use client";

import styles from "./home.module.css";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import SouthIcon from "@mui/icons-material/South";
import { motion } from "framer-motion";

function HomeComponent() {
  const [textColor, setTextColor] = useState("darkkhaki");

  return (
    <div className={styles.wrapper}>
      <Box
        color={textColor}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Typography variant={"h6"} gutterBottom color={"#fff8ee"}>
          I am
        </Typography>
        <Typography variant={"h2"} gutterBottom textAlign={"center"}>
          <TypeAnimation
            sequence={[
              "Software engineer",
              2000,
              () => setTextColor("darkkhaki"),
              "",
            ]}
            repeat={Infinity}
          />
        </Typography>
        <Typography variant={"h1"} gutterBottom color={"#fff8ee"}>
          Jun
        </Typography>
      </Box>
      <motion.div
        className={styles.arrow}
        animate={{
          y: 40,
        }}
        initial={{
          y: 0,
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      >
        <SouthIcon fontSize="inherit" />
      </motion.div>
    </div>
  );
}

export default HomeComponent;
