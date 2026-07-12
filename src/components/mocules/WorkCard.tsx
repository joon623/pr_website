"use client";

import { MouseEvent, useRef } from "react";
import { Box } from "@mui/system";
import Tag from "@/components/atoms/Tag";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Highlight {
  value: string;
  label: string;
}

interface WorkCardProps {
  date: string;
  title: string;
  role: string;
  highlights: Highlight[];
  content: string[];
  tags: string[];
}

const MAX_TILT_DEG = 4;

// toss-style stagger: 카드 진입 시 지표가 스프링으로 순차 팝업
const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
};

const popItem = {
  hidden: { opacity: 0, y: 18, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

function WorkCard({
  date,
  title,
  role,
  highlights,
  content,
  tags,
}: WorkCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const ratioX = (event.clientX - rect.left) / rect.width - 0.5;
    const ratioY = (event.clientY - rect.top) / rect.height - 0.5;

    rotateY.set(ratioX * MAX_TILT_DEG);
    rotateX.set(-ratioY * MAX_TILT_DEG);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <Box sx={{ position: "relative", marginBottom: "3.5rem" }}>
        {/* timeline node */}
        <Box
          sx={{
            position: "absolute",
            left: "calc(-1.75rem - 5px)",
            top: "2.1rem",
            width: "11px",
            height: "11px",
            borderRadius: "50%",
            background: "linear-gradient(45deg, #38bdf8, #00ff95)",
            boxShadow: "0 0 12px rgba(94, 234, 212, 0.6)",
          }}
        />
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: springRotateX,
            rotateY: springRotateY,
            transformPerspective: 1200,
          }}
        >
          <Box
            sx={{
              padding: "2rem",
              borderRadius: "16px",
              border: "1px solid rgba(94, 234, 212, 0.15)",
              backgroundColor: "rgba(15, 23, 42, 0.35)",
              transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                borderColor: "rgba(94, 234, 212, 0.4)",
                boxShadow: "0 12px 40px rgba(94, 234, 212, 0.08)",
              },
            }}
          >
          {/* header */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
              columnGap: "0.875rem",
              rowGap: "0.25rem",
            }}
          >
            <Box
              sx={{ fontSize: "1.375rem", fontWeight: 700, color: "#fff8ee" }}
            >
              {title}
            </Box>
            <Box sx={{ fontSize: "0.875rem", fontWeight: 500, color: "#5EEAD4" }}>
              {role}
            </Box>
            <Box
              sx={{
                marginLeft: "auto",
                fontSize: "0.8125rem",
                color: "#64748B",
              }}
            >
              {date}
            </Box>
          </Box>
          {/* impact highlights */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              columnGap: "2.5rem",
              rowGap: "1rem",
              marginTop: "1.5rem",
            }}
          >
            {highlights.map((highlight) => (
              <motion.div key={highlight.label} variants={popItem}>
                <Box
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    background: "linear-gradient(45deg, #38bdf8, #00ff95)",
                    backgroundClip: "text",
                    color: "transparent",
                    whiteSpace: "nowrap",
                  }}
                >
                  {highlight.value}
                </Box>
                <Box
                  sx={{
                    marginTop: "0.25rem",
                    fontSize: "0.75rem",
                    color: "#94a3b8",
                  }}
                >
                  {highlight.label}
                </Box>
              </motion.div>
            ))}
          </motion.div>
          {/* detail bullets */}
          <Box
            component="div"
            sx={{
              marginTop: "1.25rem",
              paddingTop: "1.25rem",
              borderTop: "1px solid rgba(148, 163, 184, 0.15)",
              color: "#94a4b8",
              fontSize: ".875rem",
              lineHeight: 1.7,
              "& ul": { paddingLeft: "1.25rem" },
              "& li + li": { marginTop: "0.375rem" },
            }}
          >
            <ul>
              {content.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Box>
          {/* stack tags */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            style={{
              display: "flex",
              gap: "0.625rem",
              flexWrap: "wrap",
              marginTop: "1.25rem",
            }}
          >
            {tags.map((tag) => (
              <motion.div key={tag} variants={popItem}>
                <Tag name={tag} />
              </motion.div>
            ))}
          </motion.div>
        </Box>
        </motion.div>
      </Box>
    </motion.div>
  );
}

export default WorkCard;
