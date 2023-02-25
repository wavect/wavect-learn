import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {AccountCircle} from "@mui/icons-material";
import {stylesTopNavBar} from "./TopNavBar.styles";
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddIcon from '@mui/icons-material/Add';
import {secondaryColor} from "../../../styles/theme";
import toast from "react-hot-toast";
import useWindowDimensions, {isMobileScreen} from "../../hooks/useWindowDimensions.hook";
import MenuIcon from '@mui/icons-material/Menu';
import { ITopNavBarProps } from "./ITopNavBar.props";
import {showAvailableSoonToast} from "../../services/Toast.service";

export const TopNavBar = (props: ITopNavBarProps) => {
    const [isMobile, setMobile] = useState(false)

    const {handleToggleSidebar} = props;
    const {width} = useWindowDimensions()

    useEffect(() => {
        setMobile(isMobileScreen(width))
    }, [width])

    return <>
        <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
            <Toolbar>
                <Typography color={secondaryColor} fontWeight="bold"
                            sx={stylesTopNavBar.navElement}>YourApp</Typography>

                {isMobile ?
                    <div style={stylesTopNavBar.navGroupRight}>
                        <IconButton
                            onClick={handleToggleSidebar}
                            sx={{...stylesTopNavBar.iconBtn, backgroundColor: 'transparent'}}><MenuIcon/></IconButton>
                    </div>

                    : <>
                        <Button aria-label="explore" color="secondary" sx={stylesTopNavBar.btnDefault}
                                onClick={showAvailableSoonToast}>Explore</Button>
                        <Button aria-label="explore" color="secondary" sx={stylesTopNavBar.btnDefault}
                                onClick={showAvailableSoonToast}>Page</Button>

                        <div style={stylesTopNavBar.navGroupRight}>
                            <Button aria-label="create" color="secondary"
                                    startIcon={<AddIcon style={stylesTopNavBar.colorSecondary}/>}
                                    onClick={showAvailableSoonToast} sx={stylesTopNavBar.iconBtn}>
                                Add
                            </Button>

                            <IconButton aria-label="wallet" color="secondary" sx={stylesTopNavBar.iconBtn}
                                        onClick={showAvailableSoonToast}>
                                <AccountBalanceWalletIcon/>
                            </IconButton>

                            <IconButton aria-label="notifications" color="secondary" sx={stylesTopNavBar.iconBtn}
                                        onClick={() => toast('No notifications.', {icon: '🙌'})}>
                                <NotificationsIcon/>
                            </IconButton>

                            <Button aria-label="account"
                                    startIcon={<AccountCircle style={stylesTopNavBar.colorSecondary}/>}
                                    sx={{...stylesTopNavBar.iconBtn, marginLeft: 4}} onClick={showAvailableSoonToast}>
                                Username
                            </Button>
                        </div>
                    </>}
            </Toolbar>
        </AppBar>
    </>
}