import Header from '../components/Header/Header'
import Leading from '../components/Leading'
import Offer from '../components/Offer'
import About from '../components/About'


import Head from "next/head";

export default function Home() {

  return (
    <div className="text-white bg-black">
    <Head>
      <title>Web rychlý jako blesk včetně grafiky | Vojtěch Cina - nezávislý profesionál</title>
      <meta name="description">Tvořím weby a webové aplikace na míru. Cena od 5000 Kč včetně všeho!</meta>
      <link rel="manifest" href="/static/manifest.json" />
      <meta name="theme-color" content="#72B340" />
      <meta
        name="description"
        content="A quick starter Template for Next.js with Tailwind CSS and Typescript"
      />
    </Head>
    <Header />
    <Leading />
    <Offer />
    <About />
  </div>
  )

  

};

