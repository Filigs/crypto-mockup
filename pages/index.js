import Head from "next/head";

// import Image from "next/image";
import LandingPage from "../components/index/landing";
import NavBar from "../components/navbar";

const titleName = "Deverano - Web3 mockup website";

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
        <div>
          <NavBar />
        </div>
        <div>
          <LandingPage />
        </div>
      </main>

      <footer>{/* social links here */}</footer>
    </div>
  );
}
