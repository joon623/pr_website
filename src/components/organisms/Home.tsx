"use client";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import SouthIcon from "@mui/icons-material/South";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { mixins, tokens } from "@/styles/theme";

interface HomeInformationProps {
  job: string;
  name: string;
  tagline: string;
  mantras: string[];
}

// 고정 좌표(랜덤 금지 — hydration mismatch 방지)
const STARS = [
  { top: "12%", left: "16%", size: 2, delay: 0 },
  { top: "22%", left: "78%", size: 3, delay: 1.2 },
  { top: "18%", left: "38%", size: 2, delay: 2.1 },
  { top: "31%", left: "88%", size: 2, delay: 0.6 },
  { top: "38%", left: "8%", size: 3, delay: 1.8 },
  { top: "12%", left: "60%", size: 2, delay: 2.6 },
  { top: "52%", left: "14%", size: 2, delay: 0.9 },
  { top: "58%", left: "90%", size: 2, delay: 1.5 },
  { top: "70%", left: "22%", size: 3, delay: 2.9 },
  { top: "76%", left: "70%", size: 2, delay: 0.3 },
  { top: "84%", left: "42%", size: 2, delay: 1.1 },
  { top: "66%", left: "54%", size: 2, delay: 2.3 },
  { top: "44%", left: "68%", size: 2, delay: 3.2 },
  { top: "80%", left: "86%", size: 3, delay: 1.7 },
];

const HERO_RINGS = [
  { size: 620, duration: 120, reverse: false },
  { size: 980, duration: 200, reverse: true },
];

function HomeInformation({ job, name, tagline, mantras }: HomeInformationProps) {
  // toss-style parallax: 스크롤 시 배경은 느리게, 콘텐츠는 떠오르며 페이드아웃
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 800], [0, 160]);
  const contentOpacity = useTransform(scrollY, [0, 520], [1, 0]);
  const contentY = useTransform(scrollY, [0, 520], [0, -70]);

  return (
    <Box
      component={"section"}
      sx={{
        position: "relative",
        isolation: "isolate",
        margin: "-1.5rem -1.5rem 0",
        padding: "var(--global-padding-top) 1.5rem 1.5rem",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        style={{
          opacity: contentOpacity,
          y: contentY,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* LCP: opacity 애니메이션 금지 — opacity 0으로 시작하면 hydration + fade가 끝날 때까지
            브라우저가 "안 그려진 요소"로 취급해 LCP가 1s+ 늦게 기록됨. transform(y)만 움직인다. */}
        <motion.div
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={mixins.eyebrow}>{job}</Box>
        </motion.div>
        <motion.div
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <Typography
            variant={"h1"}
            sx={{
              marginTop: "1rem",
              color: tokens.color.textStrong,
              fontWeight: 700,
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
            }}
          >
            {name}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Typography
            sx={{
              marginTop: "1.25rem",
              fontSize: "clamp(1rem, 2.5vw, 1.375rem)",
              color: tokens.color.textBody,
            }}
          >
            {tagline}
          </Typography>
        </motion.div>
        <Box
          sx={{
            marginTop: "2.75rem",
            minHeight: "1.8em",
            fontSize: "clamp(0.9375rem, 2.2vw, 1.125rem)",
            fontWeight: 700,
            letterSpacing: "0.02em",
            ...mixins.gradientText,
          }}
        >
          <TypeAnimation
            sequence={mantras.flatMap((mantra) => [mantra, 2400])}
            speed={40}
            deletionSpeed={70}
            repeat={Infinity}
            cursor={false}
          />
        </Box>
      <motion.div
        animate={{
          y: 24,
        }}
        initial={{
          y: 0,
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.2,
          ease: "easeInOut",
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "44px",
          marginTop: "64px",
        }}
      >
        <Box
          component="button"
          aria-label="다음 섹션으로 스크롤"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          sx={{
            display: "flex",
            background: "none",
            fontSize: "inherit",
            color: tokens.color.textMuted,
            transition: `color ${tokens.transition.hover}, filter ${tokens.transition.hover}`,
            "&:hover": {
              color: tokens.color.accent,
              filter: tokens.glow.icon,
            },
          }}
        >
          <SouthIcon fontSize="inherit" />
        </Box>
      </motion.div>
      </motion.div>
      <motion.div
        style={{
          y: backgroundY,
          scale: 1.12,
          position: "absolute",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
        }}
      >
        <Image
          src={"/images/bg1.jpg"}
          alt={"bg-image"}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            opacity: 0.3,
          }}
          priority
        />
      </motion.div>
      {/* ambient orbit rings behind the headline */}
      {HERO_RINGS.map((ring) => (
        <Box
          key={ring.size}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: `${ring.size}px`,
            height: `${ring.size}px`,
            marginTop: `${-ring.size / 2}px`,
            marginLeft: `${-ring.size / 2}px`,
            zIndex: -1,
            pointerEvents: "none",
            borderRadius: "50%",
            border: `1px dashed ${tokens.color.orbitLineFaint}`,
            animation: `orbit-spin ${ring.duration}s linear infinite${
              ring.reverse ? " reverse" : ""
            }`,
            "@media (prefers-reduced-motion: reduce)": {
              animation: "none",
            },
          }}
        >
          {/* planet dot riding the ring */}
          <Box
            sx={{
              position: "absolute",
              top: "-3px",
              left: "50%",
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: tokens.gradient.accent,
              boxShadow: tokens.glow.node,
            }}
          />
        </Box>
      ))}
      {/* twinkling stars */}
      {STARS.map((star) => (
        <Box
          key={`${star.top}-${star.left}`}
          sx={{
            position: "absolute",
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            zIndex: -1,
            pointerEvents: "none",
            borderRadius: "50%",
            backgroundColor: tokens.color.textChip,
            animation: `twinkle 3.6s ease-in-out ${star.delay}s infinite`,
            "@media (prefers-reduced-motion: reduce)": {
              animation: "none",
            },
          }}
        />
      ))}
    </Box>
  );
}

export default HomeInformation;
