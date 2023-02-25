/** Global import font */
import "@fontsource/poppins";


import {IPageWrapperProps} from "./IPageWrapper.props";
import Head from "next/head";
import {Box, CssBaseline, Toolbar, Typography} from "@mui/material";
import {TopNavBar} from "../TopNavBar/TopNavBar";
import {SideNav} from "../SideNav/SideNav";
import {backgroundColor} from "../../../styles/theme";
import {Toaster} from "react-hot-toast";

export const PageWrapper = (props: IPageWrapperProps) => {
    return <>
        <Head>
            <title>ProjectTitle</title>
            <meta name="description" content="This is an amazing project, that still needs a description."/>
            {/*<meta name="viewport" content="width=device-width, initial-scale=1" />*/}
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <SideNav/>
            <Box
                component="main"
                sx={{flexGrow: 1, overflow: 'auto', height: '100vh', backgroundColor: backgroundColor}}>
                <Toolbar/>

                {props.children}
            </Box>
        </Box>
    </>
}