import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import {ThemeProvider} from "next-themes";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider attribute="class" enableSystem={true}>
            <Head>
                <title>Holistic Life</title>
                <link rel="icon"
                      href=""
                      sizes="32x32"/>
                <link rel="icon"
                      href=""
                      sizes="192x192"/>
            </Head>
            <Navbar/>
            <Component {...pageProps} />
            <Footer/>
        </ThemeProvider>
    )
}

export default MyApp
