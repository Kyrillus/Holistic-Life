import type {NextPage} from 'next'
import Head from 'next/head'
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Landing from "../components/landing/landing";

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

            <Landing/>
        </div>
    )
}

export default LandingPage
