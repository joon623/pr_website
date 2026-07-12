"use client";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";

interface ContactSectionProps {
  email: string;
  linkedIn: string;
  gitHub: string;
}

const socialLinkSx = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "10px 20px",
  borderRadius: "9999px",
  border: "1px solid rgba(148, 163, 184, 0.25)",
  color: "#cbd5e1",
  fontSize: "0.875rem",
  transition: "border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    borderColor: "#5EEAD4",
    color: "#5EEAD4",
    boxShadow: "0 0 16px rgba(94, 234, 212, 0.25)",
  },
};

function ContactSection({ email, linkedIn, gitHub }: ContactSectionProps) {
  return (
    <Box
      component={"section"}
      sx={{
        position: "relative",
        isolation: "isolate",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "9rem 1.5rem 5rem",
      }}
    >
      {/* faint orbit echo behind the invitation */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "560px",
          height: "560px",
          marginTop: "-280px",
          marginLeft: "-280px",
          zIndex: -1,
          pointerEvents: "none",
          borderRadius: "50%",
          border: "1px dashed rgba(94, 234, 212, 0.12)",
          "@media (prefers-reduced-motion: no-preference)": {
            animation: "orbit-spin 140s linear infinite",
          },
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Box
          sx={{
            fontSize: "0.8125rem",
            fontWeight: 700,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#5EEAD4",
          }}
        >
          Contact
        </Box>
        <Typography
          variant={"h3"}
          sx={{
            marginTop: "1.25rem",
            fontWeight: 700,
            color: "#fff8ee",
            fontSize: "clamp(1.75rem, 5vw, 2.75rem)",
          }}
        >
          함께 해볼까요?
        </Typography>
        <Typography
          sx={{
            margin: "1.25rem auto 0",
            maxWidth: "480px",
            lineHeight: 1.8,
            color: "#94a3b8",
            fontSize: "0.9375rem",
          }}
        >
          가벼운 커피챗부터 협업·채용 제안까지 언제든 환영합니다.
          <br />
          보내주신 메일은 꼭 읽고 답장드립니다.
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "2.5rem" }}
        >
          <Box
            component="a"
            href={`mailto:${email}`}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.625rem",
              padding: "16px 40px",
              borderRadius: "9999px",
              border: "1px solid rgba(94, 234, 212, 0.45)",
              color: "#5EEAD4",
              fontWeight: 700,
              fontSize: "1rem",
              transition:
                "background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(94, 234, 212, 0.08)",
                boxShadow: "0 0 28px rgba(94, 234, 212, 0.3)",
                transform: "translateY(-2px)",
              },
            }}
          >
            {email}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "0.875rem",
            marginTop: "1.75rem",
          }}
        >
          <Box
            component="a"
            href={gitHub}
            target="_blank"
            rel="noreferrer"
            sx={socialLinkSx}
          >
            <GitHubIcon sx={{ fontSize: "1.125rem" }} />
            GitHub
          </Box>
          <Box
            component="a"
            href={linkedIn}
            target="_blank"
            rel="noreferrer"
            sx={socialLinkSx}
          >
            <LinkedInIcon sx={{ fontSize: "1.125rem" }} />
            LinkedIn
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "4.5rem",
            fontSize: "0.75rem",
            letterSpacing: "0.08em",
            color: "#475569",
          }}
        >
          박남준 · Software Engineer
        </Box>
      </motion.div>
    </Box>
  );
}

export default ContactSection;
