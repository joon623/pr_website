"use client";

import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Circle from "@/components/atoms/shape/circle";
import { Box } from "@mui/system";

interface SkillCirclesProps {
  items: string[];
  centerItem: ReactNode;
  isSelected: boolean;
}

function SkillCircles({ items, centerItem, isSelected }: SkillCirclesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState<number>(0);

  useEffect(() => {
    function updateSize() {
      if (containerRef.current) {
        const width = containerRef.current.getBoundingClientRect().width;
        const realRadius = width / 2 - 50 - 24;

        setRadius(realRadius);
      }
    }

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const centerCircleStyle: CSSProperties = isSelected
    ? {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        transition: "all 2s ease-in-out",
      }
    : {
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: 1,
        transition: "all 2s ease-in-out",
      };

  const circleBoxStyle = (index: number): CSSProperties => {
    const deg = 360 / items.length;
    const circleSize = 50; // 원의 지름
    const translateX = Math.cos((deg * index * Math.PI) / 180) * radius;
    const translateY = Math.sin((deg * index * Math.PI) / 180) * radius;

    return {
      position: "absolute",
      transition: "all 2s ease-in-out",
      opacity: isSelected ? 1 : 0,
      top: isSelected ? "50%" : "0",
      left: isSelected ? "50%" : "0",
      zIndex: isSelected ? 1 : 0,
      transform: isSelected
        ? `translate(-50%, -50%) translate(${translateX - circleSize / 2}px, ${
            translateY - circleSize / 2
          }px)`
        : "none",
    };
  };

  const containerStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    height: `${isSelected ? "600px" : "100px"}`,
    aspectRatio: "1/1",
    maxWidth: "600px",
    marginBottom: "3rem",
  };

  const getSkillCircles = () => {
    return (
      <>
        {items.map((item, index) => {
          return (
            <Box
              key={index}
              style={{
                width: "50px",
                height: "50px",
                ...circleBoxStyle(index),
              }}
            >
              <Circle>
                <Image src={item} alt={"skillImage"} width={50} height={50} />
              </Circle>
            </Box>
          );
        })}
      </>
    );
  };

  return (
    <Box display={"flex"} justifyContent={"center"} marginTop={"20px"}>
      <Box style={containerStyle} ref={containerRef}>
        <Box style={centerCircleStyle}>{centerItem}</Box>
        {getSkillCircles()}
      </Box>
    </Box>
  );
}

export default SkillCircles;
