"use client";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Box } from "@mui/system";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { themeStyles } from "@/styles/theme";
import { Navigations, NavigationType } from "@/shared/navigations";
import { useMediaQuery } from "@mui/material";
import { mediaQueryInput } from "@/styles/breakpoint";
import { v4 } from "uuid";

const NAVIGATION_PADDING = "12px";

function Navigation() {
  const [clicked, setClicked] = useState(false);
  const matches = useMediaQuery(mediaQueryInput);

  const getMenu = () => {
    return (
      <AnimatePresence>
        {clicked && (
          <motion.div
            style={{
              overflow: "hidden",
              width: "100vw",
              marginLeft: `-${NAVIGATION_PADDING}`,
            }}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
          >
            {Navigations.map(({ name, color }: NavigationType) => {
              return (
                <Box
                  key={v4()}
                  display={"flex"}
                  justifyContent={"center"}
                  padding={"20px"}
                  bgcolor={color}
                  color={"black"}
                >
                  {name}
                </Box>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  const getLargeMenu = () => {
    return (
      <Box display={"flex"}>
        {Navigations.map(({ name }: NavigationType) => {
          return (
            <Box
              key={v4()}
              display={"flex"}
              justifyContent={"center"}
              padding={"20px"}
              color={"white"}
            >
              {name}
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <Box
      component="nav"
      position={"fixed"}
      top={0}
      right={0}
      left={0}
      padding={`${NAVIGATION_PADDING}`}
      display={matches ? "flex" : "block"}
      justifyContent={"center"}
      zIndex={999}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"12px"}
        maxWidth={matches ? "1560px" : "auto"}
        width={"100%"}
      >
        <motion.div whileHover={{ scale: themeStyles.scales.hover }}>
          <HomeRoundedIcon />
        </motion.div>
        {matches ? (
          getLargeMenu()
        ) : (
          <motion.div whileHover={{ scale: themeStyles.scales.hover }}>
            <ReorderIcon onClick={() => setClicked(!clicked)} />
          </motion.div>
        )}
      </Box>
      {!matches && getMenu()}
    </Box>
  );
}

export default Navigation;
