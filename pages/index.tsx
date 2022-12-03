import type {NextPage} from 'next'
import Head from 'next/head'
import Navbar from "../components/navbar/navbar";
import Bewerbungsseite from "../components/bewerbung/bewerbungsseite";
import Footer from "../components/footer/footer";

const LandingPage: NextPage = () => {
    return (
        <div className="">
            <Head>
                <title>PreTalk</title>
                <link rel="icon"
                      href="https://www.sti-consulting.de/wp-content/uploads/2020/04/sti_favicon_sti_logo_2-150x150.jpg"
                      sizes="32x32"/>
                <link rel="icon"
                      href="https://www.sti-consulting.de/wp-content/uploads/2020/04/sti_favicon_sti_logo_2-300x300.jpg"
                      sizes="192x192"/>
            </Head>

            <Navbar/>
            <Bewerbungsseite/>
            <Footer/>
        </div>
    )
}

export default LandingPage
