import '../styles/globals.css'
import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import {ThemeProvider} from "next-themes";
import {useState} from "react";
import MobileMenu from "../components/navbar/mobileMenu";
import {SessionProvider} from "next-auth/react"
import {AppProps} from "next/app";
import {ChakraProvider} from "@chakra-ui/react";

function MyApp({Component, pageProps}: AppProps) {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
            <ThemeProvider attribute="class" enableSystem={false}>
                <SessionProvider session={pageProps.session}>
                    <Head>
                        <title>Holistic Life</title>
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
    )
}

export default MyApp
