"use client";

import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { mixins, tokens } from "@/styles/theme";

interface SkillOrbitProps {
  skills: { category: string; items: string[] }[];
}

const ORBIT_SIZE = 720;

const RINGS = [
  { radius: 100, duration: 40, reverse: false, offset: 0 },
  { radius: 190, duration: 60, reverse: true, offset: 36 },
  { radius: 300, duration: 85, reverse: false, offset: 18 },
];

const chipSx = {
  ...mixins.chip,
  transition: `border-color ${tokens.transition.hover}, box-shadow ${tokens.transition.hover}`,
  "&:hover": {
    borderColor: tokens.color.accent,
    boxShadow: tokens.glow.chip,
  },
};

function SkillOrbit({ skills }: SkillOrbitProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // 미디어 쿼리 없이 컨테이너 폭에 맞춰 궤도 전체를 비율 축소
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new ResizeObserver(() => {
      setScale(Math.min(1, wrapper.clientWidth / ORBIT_SIZE));
    });
    observer.observe(wrapper);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={wrapperRef}
      sx={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        style={{ width: ORBIT_SIZE * scale, height: ORBIT_SIZE * scale }}
      >
        <Box
          style={{ transform: `scale(${scale})` }}
          sx={{
            position: "relative",
            width: ORBIT_SIZE,
            height: ORBIT_SIZE,
            transformOrigin: "top left",
            "&:hover .orbit-rotor, &:hover .orbit-chip": {
              animationPlayState: "paused",
            },
            "@media (prefers-reduced-motion: reduce)": {
              "& .orbit-rotor, & .orbit-chip": { animation: "none" },
            },
          }}
        >
          {/* center core */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "130px",
              height: "130px",
              borderRadius: "50%",
              background: tokens.gradient.heroCore,
            }}
          />
          {skills.map((skill, ringIndex) => {
            const ring = RINGS[ringIndex % RINGS.length];
            return (
              <Box key={skill.category}>
                {/* static orbit line */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: `${ring.radius * 2}px`,
                    height: `${ring.radius * 2}px`,
                    borderRadius: "50%",
                    border: `1px dashed ${tokens.color.orbitLine}`,
                  }}
                />
                {/* category label floated clear of the orbit line */}
                <Box
                  sx={{
                    position: "absolute",
                    top: `calc(50% - ${ring.radius + 38}px)`,
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 3,
                    padding: "2px 12px",
                    ...mixins.orbitLabel,
                    backgroundColor: "#000",
                  }}
                >
                  {skill.category}
                </Box>
                {/* rotating layer */}
                <Box
                  className="orbit-rotor"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    animation: `orbit-spin ${ring.duration}s linear infinite${
                      ring.reverse ? " reverse" : ""
                    }`,
                  }}
                >
                  {skill.items.map((item, index) => {
                    const angle =
                      (360 / skill.items.length) * index + ring.offset;
                    const radian = (angle * Math.PI) / 180;
                    // 서버(Node)와 브라우저의 Math.cos/sin 마지막 자리 오차로 인한
                    // hydration mismatch 방지 — 소수 2자리로 고정
                    const x =
                      Math.round(Math.cos(radian) * ring.radius * 100) / 100;
                    const y =
                      Math.round(Math.sin(radian) * ring.radius * 100) / 100;

                    return (
                      <Box
                        key={item}
                        sx={{
                          position: "absolute",
                          top: `calc(50% + ${y}px)`,
                          left: `calc(50% + ${x}px)`,
                          transform: "translate(-50%, -50%)",
                          zIndex: 1,
                        }}
                      >
                        {/* counter-rotation keeps chips upright */}
                        <Box
                          className="orbit-chip"
                          sx={{
                            ...chipSx,
                            animation: `orbit-spin ${ring.duration}s linear infinite${
                              ring.reverse ? "" : " reverse"
                            }`,
                          }}
                        >
                          {item}
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        </Box>
      </motion.div>
    </Box>
  );
}

export default SkillOrbit;
