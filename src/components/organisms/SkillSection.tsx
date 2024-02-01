"use client";

import { Box } from "@mui/system";
import Circle from "@/components/atoms/Circle";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { mediaQueryInput } from "@/styles/breakpoint";
import { Title } from "@/components/atoms";
import { SkillCircles } from "@/components/mocules";

interface SkillSectionProps {
  skills: { category: string; images: string[] }[];
}

function SkillSection({ skills }: SkillSectionProps) {
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
    <Box paddingBottom={"25rem"} component={"section"}>
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
          items={skills[0].images}
          centerItem={
            <Box ref={feRef}>
              <Circle>{skills[0].category}</Circle>
            </Box>
          }
          isSelected={selected === 0}
        />
        <SkillCircles
          items={skills[1].images}
          centerItem={
            <Box ref={beRef}>
              <Circle>{skills[1].category}</Circle>
            </Box>
          }
          isSelected={selected === 1}
        />
        <SkillCircles
          items={skills[2].images}
          centerItem={
            <Box ref={infraRef}>
              <Circle>{skills[2].category}</Circle>
            </Box>
          }
          isSelected={selected === 2}
        />
      </Box>
    </Box>
  );
}

export default SkillSection;
