import {primaryColor, secondaryColor, theme} from "../../../styles/theme";

const drawerWidth = 240;
export const sideNavStyles = {
    drawer: {
        width: drawerWidth - 50,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
            width: drawerWidth, boxSizing: 'border-box', backgroundColor: primaryColor, color: secondaryColor,
        },
        ['& svg']: {color: secondaryColor},
        ['& hr']: {backgroundColor: '#757575', width: '80%', marginLeft: '10%', marginRight: 'auto'},
    },

    listItem: {
        "&$selected:hover": {
            backgroundColor: theme.palette.primary.light,
        },
        "&:hover": {
            backgroundColor: theme.palette.primary.light,
        },
    },
    listItemSelected: {
        backgroundColor: `${theme.palette.primary.light}!important`,
    },
}