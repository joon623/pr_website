"use client";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function ContactSection() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      padding={"20px"}
      component={"section"}
    >
      <Typography color={"#fff8ee"} variant={"h2"}>
        Contact
      </Typography>
      <Typography color={"#fff8ee"} variant={"h6"}>
        devjoon623@gmail.com
      </Typography>
      <Box marginTop={"20px"}>
        <a href="mailto:devjoon623@gmail.com">
          <button
            style={{
              backgroundImage:
                "linear-gradient(to right, #B3FFAB 0%, #12FFF7 51%, #B3FFAB 100%)",
              margin: "10p",
              padding: "15px 45px",
              textAlign: "center",
              textTransform: "uppercase",
              backgroundSize: "200% auto",
              color: "white",
              boxShadow: "0 0 20px #eee",
              borderRadius: "10px",
              display: "block",
            }}
          >
            Send Mail
          </button>
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

export default ContactSection;
