import {secondaryColor, theme} from "../../../styles/theme";

export const stylesTopNavBar = {
    btnDefault: {
        marginLeft: 2,
        paddingLeft: 2,
        paddingRight: 2,
        textTransform: 'initial',
    },
    navElement: {
        paddingLeft: 2,
        paddingRight: 2,
    },
    navGroupRight: {
        width: '100%', textAlign: 'right'
    } as any,
    colorSecondary: {
        color: secondaryColor,
    },
    iconBtn: {
        backgroundColor: theme.palette.primary.light,
        textTransform: 'initial',
        color: secondaryColor,
        borderRadius: '2rem',
        paddingLeft: 2,
        paddingRight: 2,
        marginLeft: 2,
    },
}