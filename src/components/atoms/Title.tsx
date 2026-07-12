import { Typography } from "@mui/material";

interface TitleProps {
  title: string;
}

function Title({ title }: TitleProps) {
  return (
    <Typography variant={"h2"} sx={{ color: "#fff8ee", whiteSpace: "pre" }}>
      {title}
    </Typography>
  );
}

export default Title;
