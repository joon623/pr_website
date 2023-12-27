import { Box } from "@mui/system";

interface TagProps {
  name: string;
}

function Tag({ name }: TagProps) {
  return (
    <Box
      fontSize={"0.75rem"}
      padding={"0.725rem"}
      bgcolor="rgba(45,212,191,.3)"
      borderRadius={"9999px"}
      color={"#5EEAD4"}
      component={"span"}
      display={"inline-block"}
    >
      {name}
    </Box>
  );
}

export default Tag;
