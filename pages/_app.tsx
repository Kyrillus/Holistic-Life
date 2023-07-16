import '../styles/globals.css'
import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import {ThemeProvider} from "next-themes";
import {useState} from "react";
import MobileMenu from "../components/navbar/mobileMenu";
import {SessionProvider} from "next-auth/react"
import {AppProps} from "next/app";
import {ChakraProvider, extendBaseTheme} from "@chakra-ui/react";
import chakraTheme from '@chakra-ui/theme'

function MyApp({Component, pageProps}: AppProps) {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const { Skeleton, Switch, Button} = chakraTheme.components

    const theme = extendBaseTheme({
        fonts: {
          body: `'Comfortaa', sans-serif`,
        },
        components: {
            Skeleton,
            Switch,
            Button,
        },
    })

    return (
        <ChakraProvider theme={theme}>
            <ThemeProvider attribute="class" enableSystem={false}>
                <SessionProvider session={pageProps.session}>
                    <Head>
                        <title>holistic life</title>
                        <link rel="icon"
                              href=""
                              sizes="32x32"/>
                        <link rel="icon"
                              href=""
                              sizes="192x192"/>
                    </Head>
                    <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
                    <MobileMenu navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
                    <Component {...pageProps} />
                    <Footer/>
                </SessionProvider>
            </ThemeProvider>
        </ChakraProvider>
    )
}

export default MyApp
