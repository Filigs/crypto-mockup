import Head from "next/head";
import Footer from "../components/footer";
// import Image from "next/image";
import LandingPage from "../components/index/landing";
import NavBar from "../components/navbar";
const titleName = "Web3 Website Mockup - Filipe Martins";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{titleName}</title>
        <meta name="description" content="Web3 Mockup made by Filipe Martins" />

        {/* */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <section>
          <LandingPage />
        </section>
      </main>

      <Footer />
    </div>
  );
}
