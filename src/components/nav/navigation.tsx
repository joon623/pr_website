"use client";

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ReorderIcon from '@mui/icons-material/Reorder';
import {Box} from "@mui/system";
import styles from "./navigation.module.css"
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {themeStyles} from "@/styles/theme";
import {Navigations, NavigationType} from "@/shared/navigations";
import {useMediaQuery} from "@mui/material";
import {mediaQueryInput} from "@/styles/breakpoint";
import {v4} from 'uuid';


function Navigation() {
    const [clicked, setClicked] = useState(false);
    const matches = useMediaQuery(mediaQueryInput);

    const getMenu = () => {
        return (
            Navigations.map(({name, color}: NavigationType) => {
                return (
                    <Box
                        key={v4()}
                        display={'flex'} justifyContent={"center"} padding={"20px"} bgcolor={color}
                        color={"black"}>{name}</Box>

                )
            })
        )
    }

    const getLargeMenu = () => {
        return (
            <Box display={"flex"}>
                {Navigations.map(({name}: NavigationType) => {
                    return (
                        <Box
                            key={v4()}
                            display={'flex'} justifyContent={"center"} padding={"20px"}
                            color={"white"}>{name}</Box>
                    )
                })}</Box>
        )
    }

    return (
        <nav className={styles.navigation}>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={"100%"}
                 padding={"12px"}>
                <motion.div whileHover={{scale: themeStyles.scales.hover}}>
                    <HomeRoundedIcon/>
                </motion.div>
                {matches ? getLargeMenu() :
                    <motion.div whileHover={{scale: themeStyles.scales.hover}}>
                        <ReorderIcon onClick={() => setClicked(!clicked)}/>
                    </motion.div>
                }
            </Box>
            {!matches &&
                <AnimatePresence>
                    {clicked &&
                        <motion.div
                            style={{overflow: "hidden"}}
                            initial={{height: 0}}
                            animate={{height: "auto"}}
                            exit={{height: 0}}
                        >
                            {getMenu()}
                        </motion.div>
                    }
                </AnimatePresence>
            }
        </nav>
    );
}

export default Navigation;