import { Box } from "@mui/system";
import { CSSProperties, ReactNode } from "react";

interface CircleProps {
  children: ReactNode;
  style?: CSSProperties;
}

function Circle({ children, style }: CircleProps) {
  return (
    <Box
      width={"100px"}
      height={"100px"}
      border={"8px solid rgba(58, 170, 222, 0.3)"}
      borderRadius={"50%"}
      position={"relative"}
      style={style}
    >
      <Box
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Circle;
