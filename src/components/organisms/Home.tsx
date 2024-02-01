"use client";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import SouthIcon from "@mui/icons-material/South";
import { motion } from "framer-motion";
import Image from "next/image";

interface HomeInformationProps {
  job: string;
  name: string;
}

function HomeInformation({ job, name }: HomeInformationProps) {
  return (
    <Box
      padding={"var(--global-padding-top) 1.5rem 1.5rem"}
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      component={"section"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography variant={"h3"} gutterBottom color={"#fff8ee"}>
          Hi there!
        </Typography>
        <Typography variant={"h3"} gutterBottom color={"#fff8ee"}>
          I am
        </Typography>
        <Typography variant={"h2"} gutterBottom textAlign={"center"}>
          <TypeAnimation
            sequence={[job, 2000, ""]}
            repeat={Infinity}
            cursor={false}
            style={{
              color: "transparent",
              background: "linear-gradient(45deg, #09009f, #00ff95 80%) text",
              fontWeight: "bold",
            }}
          />
        </Typography>
        <Typography variant={"h1"} gutterBottom color={"#fff8ee"}>
          {name}
        </Typography>
      </Box>
      <motion.div
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
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "70px",
          marginTop: "50px",
        }}
      >
        <SouthIcon fontSize="inherit" />
      </motion.div>
      <Image
        src={"/images/bg1.jpg"}
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

export default HomeInformation;
