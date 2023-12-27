"use client";

import { Box } from "@mui/system";
import Title from "@/components/atoms/text/title";
import Circle from "@/components/atoms/shape/circle";
import { useEffect, useRef, useState } from "react";
import { SkillCircles } from "@/components/skills/index";
import { useMediaQuery } from "@mui/material";
import { mediaQueryInput } from "@/styles/breakpoint";

function Skills() {
  const [selected, setSelected] = useState(-1);
  const matches = useMediaQuery(mediaQueryInput);

  const feRef = useRef<HTMLDivElement>(null);
  const beRef = useRef<HTMLDivElement>(null);
  const infraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (feRef.current as HTMLDivElement).addEventListener("mouseenter", () => {
      setSelected(0);
    });
    (beRef.current as HTMLDivElement).addEventListener("mouseenter", () => {
      setSelected(1);
    });
    (infraRef.current as HTMLDivElement).addEventListener("mouseenter", () => {
      setSelected(2);
    });

    return () => {
      (feRef.current as HTMLDivElement).removeEventListener(
        "mouseenter",
        () => {
          setSelected(0);
        },
      );
      (beRef.current as HTMLDivElement).removeEventListener(
        "mouseenter",
        () => {
          setSelected(1);
        },
      );
      (infraRef.current as HTMLDivElement).removeEventListener(
        "mouseenter",
        () => {
          setSelected(2);
        },
      );
    };
  }, []);

  return (
    <Box paddingBottom={"25rem"}>
      <Box display={"flex"} justifyContent={"center"}>
        <Title title={"Skills"} />
      </Box>
      <Box
        style={{
          display: matches ? "flex" : "block",
          justifyContent: "center",
          gap: "12rem",
        }}
      >
        <SkillCircles
          items={[
            "/fastapi.png",
            "/express.png",
            "/node.jpeg",
            "/python.png",
            "/mysql.png",
            "/ts.webp",
          ]}
          centerItem={
            <Box ref={beRef}>
              <Circle>Backend</Circle>
            </Box>
          }
          isSelected={selected === 1}
        />
        <SkillCircles
          items={[
            "/ts.webp",
            "/nextjs.png",
            "/react.png",
            "/html.png",
            "/css.jpg",
            "/javascript.png",
          ]}
          centerItem={
            <Box ref={feRef}>
              <Circle>Frontend</Circle>
            </Box>
          }
          isSelected={selected === 0}
        />
        <SkillCircles
          items={["/vercel.jpeg", "/aws.png", "/docker.png", "/heroku.png"]}
          centerItem={
            <Box ref={infraRef}>
              <Circle>Infra</Circle>
            </Box>
          }
          isSelected={selected === 2}
        />
      </Box>
    </Box>
  );
}

export default Skills;
