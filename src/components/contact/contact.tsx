"use client";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./contact.module.css";

function Contact() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      padding={"20px"}
    >
      <Typography color={"#fff8ee"} variant={"h2"}>
        Contact
      </Typography>
      <Typography color={"#fff8ee"} variant={"h6"}>
        devjoon623@gmail.com
      </Typography>
      <Box marginTop={"20px"}>
        <a href="mailto:devjoon623@gmail.com">
          <button className={styles.buttons}>Send Mail</button>
        </a>
      </Box>
      <Box display={"flex"} gap={"15px"} marginTop={"15px"}>
        <a href="https://github.com/joon623" target="_blank">
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/namjun-park-60423a1bb/"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
      </Box>
    </Box>
  );
}

export default Contact;
