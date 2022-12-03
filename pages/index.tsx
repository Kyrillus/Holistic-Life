import type {NextPage} from 'next'
import Head from 'next/head'
import Navbar from "../components/navbar/navbar";
import Bewerbungsseite from "../components/bewerbung/bewerbungsseite";
import Footer from "../components/footer/footer";

const LandingPage: NextPage = () => {
    return (
        <div className="">
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
            <Bewerbungsseite/>
            <Footer/>
        </div>
    )
}

export default LandingPage
