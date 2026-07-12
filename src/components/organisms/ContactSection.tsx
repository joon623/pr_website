"use client";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import { mixins, tokens } from "@/styles/theme";

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
  borderRadius: tokens.radius.pill,
  border: `1px solid ${tokens.color.borderMuted}`,
  color: tokens.color.textBody,
  fontSize: "0.875rem",
  transition: `border-color ${tokens.transition.hover}, color ${tokens.transition.hover}, box-shadow ${tokens.transition.hover}`,
  "&:hover": {
    borderColor: tokens.color.accent,
    color: tokens.color.accent,
    boxShadow: tokens.glow.social,
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
          border: `1px dashed ${tokens.color.orbitLineFaint}`,
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
        <Box sx={mixins.eyebrow}>Contact</Box>
        <Typography
          variant={"h3"}
          sx={{
            marginTop: "1.25rem",
            fontWeight: 700,
            color: tokens.color.textStrong,
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
            color: tokens.color.textMuted,
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
              borderRadius: tokens.radius.pill,
              border: `1px solid ${tokens.color.borderAccent}`,
              color: tokens.color.accent,
              fontWeight: 700,
              fontSize: "1rem",
              transition: `background-color ${tokens.transition.hover}, box-shadow ${tokens.transition.hover}, transform ${tokens.transition.hover}`,
              "&:hover": {
                backgroundColor: tokens.color.surfaceAccentHover,
                boxShadow: tokens.glow.cta,
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
            color: tokens.color.textDim,
          }}
        >
          박남준 · Software Engineer
        </Box>
      </motion.div>
    </Box>
  );
}

export default ContactSection;
