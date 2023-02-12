import {ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import React from "react";
import {ISideNavItemProps} from "./ISideNavItem.props";
import {sideNavStyles} from "../SideNav.styles";
import {useRouter} from "next/router";
import {showAvailableSoonToast} from "../../../services/Toast.service";

export const SideNavItem = (props: ISideNavItemProps) => {
    const {text, children, path, sx, unavailable} = props;
    const router = useRouter();
    const isSelected = router.pathname === path;

    const onClick = async () => {
        if (unavailable) {
            showAvailableSoonToast()
        } else {
            await router.push(path)
        }
    }

    return <ListItem key={text} disablePadding sx={sx}>
        <ListItemButton sx={isSelected ? sideNavStyles.listItemSelected : sideNavStyles.listItem} selected={isSelected} onClick={onClick}>
            <ListItemIcon>
                {children}
            </ListItemIcon>
            <ListItemText primary={text}/>
        </ListItemButton>
    </ListItem>;
}