"use client";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

interface ContactSectionProps {
  email: string;
  linkedIn: string;
  gitHub: string;
}

function ContactSection({ email, linkedIn, gitHub }: ContactSectionProps) {
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
        {email}
      </Typography>
      <Box marginTop={"20px"}>
        <a href={`mailto:${email}`}>
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
        <a href={gitHub} target="_blank">
          <GitHubIcon />
        </a>
        <a href={linkedIn} target="_blank">
          <LinkedInIcon />
        </a>
      </Box>
    </Box>
  );
}

export default ContactSection;
