import { Box } from "@mui/system";
import { tokens } from "@/styles/theme";

interface TagProps {
  name: string;
}

function Tag({ name }: TagProps) {
  return (
    <Box
      component={"span"}
      sx={{
        fontSize: "0.75rem",
        padding: "0.725rem",
        bgcolor: tokens.color.surfaceTag,
        borderRadius: tokens.radius.pill,
        color: tokens.color.accent,
        display: "inline-block",
      }}
    >
      {name}
    </Box>
  );
}

export default Tag;
