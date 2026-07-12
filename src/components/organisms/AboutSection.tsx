"use client";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { tokens } from "@/styles/theme";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

interface AboutSectionProps {
  title: string;
  content: string;
}

const AboutSection = ({ title, content }: AboutSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // 스크롤 진행도에 따라 위에서 아래로 그려지는 라인
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.2"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });
  const dotTop = useTransform(lineScale, (value) => `${value * 100}%`);

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: "relative",
        margin: "150px auto 0px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "1200px",
      }}
    >
      <Box sx={{ position: "sticky", top: "50%" }}>
        {/* scroll-drawn thread — 항상 문단 위에서 끝나도록 sticky에 부착 */}
        <Box
          sx={{
            position: "absolute",
            bottom: "calc(100% + 20px)",
            left: "50%",
            transform: "translateX(-50%)",
            height: "30vh",
            width: "1px",
            pointerEvents: "none",
          }}
        >
          <motion.div
            style={{
              scaleY: lineScale,
              transformOrigin: "top",
              width: "100%",
              height: "100%",
              background: tokens.gradient.thread,
            }}
          />
          <motion.div
            style={{
              top: dotTop,
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: tokens.gradient.accent,
              boxShadow: tokens.glow.dot,
            }}
          />
        </Box>
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
            sx={{ textAlign: "center" }}
            style={{
              background:
                "linear-gradient(96.77deg, rgb(249, 106, 25) -0.96%, rgb(251, 96, 189) 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: tokens.color.textStrong,
              maxWidth: "560px",
              lineHeight: 1.8,
            }}
          >
            <TypeAnimation
              sequence={[content]}
              speed={{ type: "keyStrokeDelayInMs", value: 30 }}
              omitDeletionAnimation={true}
            />
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default AboutSection;
