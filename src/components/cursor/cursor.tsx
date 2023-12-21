"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import styles from "./cursor.module.css";

function Cursor() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const onHandleMouseMove = (e: MouseEvent) => {
    setX(e.x);
    setY(e.y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", onHandleMouseMove);
    return () => {
      window.removeEventListener("mousemove", onHandleMouseMove);
    };
  }, []);

  return (
    <Box
      position={"fixed"}
      left={x}
      top={y}
      zIndex={-1}
      border={"2px solid gray"}
      borderRadius={"50%"}
      width={"20px"}
      height={"20px"}
      className={styles.cursor}
    />
  );
}

export default Cursor;
