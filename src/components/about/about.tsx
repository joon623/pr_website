import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { themeStyles } from "@/styles/theme";

const About = () => (
  <Box
    margin={"150px auto 0px"}
    display={"flex"}
    alignItems={"center"}
    flexDirection={"column"}
  >
    <Typography
      variant={"h2"}
      gutterBottom
      textAlign={"center"}
      color={themeStyles.color.primary.floralWhite}
    >
      About me
    </Typography>
    <Typography
      variant={"h5"}
      gutterBottom
      textAlign={"center"}
      color={themeStyles.color.primary.floralWhite}
    >
      &quot;Habit is life, and attitude is everything.&quot;
    </Typography>
    <Typography
      color={themeStyles.color.primary.floralWhite}
      maxWidth={"560px"}
    >
      I quickly develop and solve problems by any means for business success. I
      sacrifice for the team to produce results. Even at the beginning, I
      swiftly learn and immediately apply it to work.
    </Typography>
  </Box>
);

export default About;
