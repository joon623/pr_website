import { Typography } from "@mui/material";

interface TitleProps {
  title: string;
}

function Title({ title }: TitleProps) {
  return (
    <Typography color={"#fff8ee"} variant={"h2"} whiteSpace={"pre"}>
      {title}
    </Typography>
  );
}

export default Title;
