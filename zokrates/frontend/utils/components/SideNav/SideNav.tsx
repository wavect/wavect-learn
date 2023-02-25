import {
    Box,
    Divider,
    Drawer,
    List,
    Toolbar,
    Typography
} from "@mui/material";
import React, {useEffect, useState} from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {sideNavStyles} from "./SideNav.styles";
import {SideNavItem} from "./SideNavItem/SideNavItem";
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import {routes} from "../../routes";
import useWindowDimensions, {isMobileScreen} from "../../hooks/useWindowDimensions.hook";
import {TopNavBar} from "../TopNavBar/TopNavBar";

export const SideNav = () => {

    const [mobileOpen, setMobileOpen] = useState(false);
    const [isMobile, setMobile] = useState(false)

    const {width} = useWindowDimensions()

    useEffect(() => {
        setMobile(isMobileScreen(width))
    }, [width])

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return <>
        <Drawer variant={isMobile ? 'temporary' : 'permanent'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{keepMounted: true}} // performance boost on mobile
                sx={sideNavStyles.drawer}>
            <Toolbar/>
            <Box sx={{overflow: 'auto'}}>
                <List>
                    <SideNavItem text='Home' path={routes.Home} unavailable={true}><HomeOutlinedIcon/></SideNavItem>
                    <SideNavItem text='Page 1' path={routes.Teams} unavailable={true}><HomeOutlinedIcon/></SideNavItem>
                    <SideNavItem text='Page 2' path={routes.Games} unavailable={true}><HomeOutlinedIcon/></SideNavItem>
                </List>
            </Box>
        </Drawer>

        <TopNavBar handleToggleSidebar={() => setMobileOpen(!mobileOpen)}/>
    </>
}