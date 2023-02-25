import {Box, Typography} from "@mui/material";
import {examplePageStyles} from "./example-page.styles";
import {useEffect, useState} from "react";
import {secondaryColor} from "../../../../styles/theme";
import useWindowDimensions, {isMobileScreen} from "../../../hooks/useWindowDimensions.hook";
import {getProof} from "../../../services/ZK.service";


export const ExamplePageContent = () => {
    //#region logic

    const [isMobile, setMobile] = useState(false)
    const {width} = useWindowDimensions()

    useEffect(() => {
        setMobile(isMobileScreen(width))
    }, [width])


    console.log("LOADING")
    useEffect(() => {
        getProof(23)
            .then((res) => {
                console.log("Stringified proof: ", JSON.stringify(res.proof))
            }).catch(console.error)
    }, [])


    const imgBannerMobileStyles = isMobile ? {backgroundPosition: 'left', height: examplePageStyles.imgBanner.height * 0.7} : undefined
    //#endregion

    return <>
        <div>
            <div style={{...examplePageStyles.imgBanner, ...imgBannerMobileStyles}}/>
        </div>

        <Box sx={isMobile ? examplePageStyles.outerPageMobile : examplePageStyles.outerPageDesktop}>
            <Box sx={{textAlign: isMobile ? 'center' : undefined}}>
                <Typography variant={isMobile ? "h5" : "h3"} sx={isMobile ? {fontWeight: 'bold'} : undefined} component="h1" color={secondaryColor}>Your Page</Typography>
                <Typography color={secondaryColor}>Some subtitle</Typography>
            </Box>
        </Box>
    </>
}