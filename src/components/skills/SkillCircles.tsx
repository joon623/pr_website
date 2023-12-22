"use client";

import Image from "next/image";
import Circle from "../atoms/shape/circle";
import { motion } from "framer-motion";
import { Box } from "@mui/system";
import { v4 } from "uuid";
import { ReactNode, useEffect, useRef, useState } from "react";

interface SkillCirclesProps {
  items: string[];
  centerItem: ReactNode;
}

function SkillCircles({ items, centerItem }: SkillCirclesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState<number>(0);

  useEffect(() => {
    function updateSize() {
      if (containerRef.current) {
        const width = containerRef.current.getBoundingClientRect().width;

        //  circle size is 100px
        const realRadius = width / 2 - 100;
        setRadius(realRadius);
      }
    }

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        aspectRatio: "1/1",
        position: "relative",
        margin: "13rem 0",
      }}
    >
      <Box
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <Circle>{centerItem}</Circle>
        {items.map((item, index) => {
          const deg = 360 / items.length;
          return (
            <Box
              key={v4()}
              position={"absolute"}
              top={"0"}
              left={"0"}
              style={{
                transform: `rotate(${
                  deg * index
                }deg) translate(${radius}px) rotate(-${deg * index}deg)`,
                transition: "all 1.2s ease-in-out",
              }}
            >
              <Circle key={v4()}>
                <Image src={item} alt={"skillImage"} width={50} height={50} />
              </Circle>
            </Box>
          );
        })}
      </Box>
    </motion.div>
  );
}

export default SkillCircles;
