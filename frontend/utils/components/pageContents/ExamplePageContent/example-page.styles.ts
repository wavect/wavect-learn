import {backgroundColorRGB, infoColor, secondaryColor, theme} from "../../../../styles/theme";

export const examplePageStyles = {
    imgBanner: {
        height: 315,
        overflow: 'hidden',
        minHeight: '100%',
        minWidth: '100%',
     /*   backgroundImage: `linear-gradient(
      rgba(${backgroundColorRGB[0]}, ${backgroundColorRGB[1]}, ${backgroundColorRGB[2]}, 0),
      rgba(${backgroundColorRGB[0]}, ${backgroundColorRGB[1]}, ${backgroundColorRGB[2]}, 0.2),
      rgba(${backgroundColorRGB[0]}, ${backgroundColorRGB[1]}, ${backgroundColorRGB[2]}, 1)
      ), url("/img/banner_dota2_compressed.jpg")`,*/
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    } as any,

    outerPageDesktop: {
        marginLeft: '10%',
        marginTop: -5,
        marginRight: '10%',
    },
    outerPageMobile: {
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: -5,
    },

    innerPage: {
        marginTop: 7,
    },

    btnJoinTournamentContainerDesktop: {
        textAlign: 'right',
        marginTop: -80,
    } as any,
    btnJoinTournamentContainerMobile: {
        textAlign: 'center',
        marginTop: 10,
    } as any,
    btnJoinTournament: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 1.5,
        minWidth: 200,
        textTransform: 'initial',
        paddingLeft: 3, paddingRight: 3,
        backgroundColor: infoColor,
        borderRadius: '2rem',
        color: secondaryColor,
        "&:hover": {
            backgroundColor: theme.palette.info.dark,
        },
        "&:disabled": {
            backgroundColor: theme.palette.secondary.dark,
            color: secondaryColor,
        },
    },
    btnConfirmDeny: {
        minWidth: 150,
        marginLeft: 5,
    },
    btnDeny: {
        backgroundColor: theme.palette.error.main,
        "&:hover": {
            backgroundColor: theme.palette.error.dark,
        },
    },

    imgGameLogo: {
        objectFit: 'contain', borderRadius: '50%',
    } as any,

    section: {
        marginLeft: 0,
        marginTop: 2,
        padding: 2,
        backgroundColor: theme.palette.primary.dark,
        borderRadius: '0.3rem',
    },
    sectionFlex: {
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        flexGrow: 1,
    },

    sectionHeaderDesktop: {
        marginLeft: 4,
    },
    sectionHeaderMobile: {
        marginLeft: 2,
    },

    socialIcon: {
        backgroundColor: infoColor,
        marginLeft: 1,
    },

    sectionRight: {
        width: '100%', textAlign: 'right',
    } as any,

}