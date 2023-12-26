"use client";

import { Box } from "@mui/system";
import Title from "@/components/atoms/text/title";
import Circle from "@/components/atoms/shape/circle";
import { useEffect, useRef, useState } from "react";
import { SkillCircles } from "@/components/skills/index";

function Skills() {
  const [selected, setSelected] = useState(-1);

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
      <SkillCircles
        items={[
          "/ts.webp",
          "/ts.webp",
          "/ts.webp",
          "/ts.webp",
          "/ts.webp",
          "/ts.webp",
        ]}
        centerItem={
          <Box ref={feRef}>
            <Circle>Frontend</Circle>
          </Box>
        }
        isSelected={selected === 0}
      />
      <SkillCircles
        items={[
          "/ts.webp",
          "/ts.webp",
          "/ts.webp",
          "/ts.webp",
          "/ts.webp",
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
          "/ts.webp",
          "/ts.webp",
          "/ts.webp",
          "/ts.webp",
          "/ts.webp",
        ]}
        centerItem={
          <Box ref={infraRef}>
            <Circle>Infra</Circle>
          </Box>
        }
        isSelected={selected === 2}
      />
    </Box>
  );
}

export default Skills;
