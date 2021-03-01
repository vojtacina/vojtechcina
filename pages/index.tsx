import Header from '../components/Header/Header'
import Leading from '../components/Leading'
import Offer from '../components/Offer'
import About from '../components/About'


import Head from "next/head";

export default function Home() {

  return (
    <div className="bg-black">

      <style jsx global>{`
      body {
        background-color: black;
        color: white;
      }
    `}</style>
      <Head>
        <title>Moderní web na míru včetně grafiky | Vojtěch Cina - nezávislý profesionál</title>
        <meta name="description">Tvořím weby a webové aplikace na míru. Cena od 5000 Kč včetně všeho!</meta>
        <link rel="manifest" href="/static/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#00000" />
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

