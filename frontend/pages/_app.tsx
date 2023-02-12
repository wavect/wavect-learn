import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "@mui/material";
import {theme} from "../styles/theme";
import {Toaster} from "react-hot-toast";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';

export default function App({Component, pageProps}: AppProps) {
    return <ThemeProvider theme={theme}>
        <div><Toaster position="top-right"
                      reverseOrder={false}
                      gutter={8} toastOptions={{
            duration: 3500,
            icon: <InfoIcon color="info"/>,
            style: {
                background: '#323541',
                color: theme.palette.secondary.dark,
                fontWeight: 'bold',
                borderColor: '#575B6F',
                borderWidth: 1,
                borderStyle: 'solid',
            },

            // Default options for specific types
            success: {
                icon: <CheckCircleIcon color='success'/>,
                style: {color: theme.palette.success.main,}
            },
            error: {
                icon: <ErrorIcon color="error"/>,
                style: {color: theme.palette.error.main,}
            },
        }}/></div>
        <Component {...pageProps} />
    </ThemeProvider>
}
