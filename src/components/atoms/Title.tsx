import { Typography } from "@mui/material";
import { tokens } from "@/styles/theme";

interface TitleProps {
  title: string;
}

function Title({ title }: TitleProps) {
  return (
    <Typography
      variant={"h2"}
      sx={{ color: tokens.color.textStrong, whiteSpace: "pre" }}
    >
      {title}
    </Typography>
  );
}

export default Title;
