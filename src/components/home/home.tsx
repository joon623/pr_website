"use client";

import styles from "./home.module.css";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import SouthIcon from "@mui/icons-material/South";
import { motion } from "framer-motion";
import Image from "next/image";

function HomeComponent() {
  const [textColor, setTextColor] = useState("darkkhaki");

  return (
    <Box
      padding={"var(--global-padding-top) 1.5rem 1.5rem"}
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        color={textColor}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography variant={"h3"} gutterBottom color={"#fff8ee"}>
          Hi there!
        </Typography>
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
      <Image
        src={"/bg1.jpg"}
        alt={"bg-image"}
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          opacity: 0.3,
          zIndex: -1,
        }}
        priority
      />
    </Box>
  );
}

export default HomeComponent;
