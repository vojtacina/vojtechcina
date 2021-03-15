import Header from '../components/Header/Header'
import Leading from '../components/Leading'
import Offer from '../components/Offer'
import About from '../components/About'
import Graph from '../components/Graph'


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
        <title>Webové aplikace nebo web na míru včetně UI | Vojtěch Cina</title>
        <meta name="description">Profesionální webové stránky a webové aplikace na míru. Již od 5000 Kč. Kalkulace konečné ceny on-line!</meta>
        <link rel="manifest" href="/static/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
        <meta name="theme-color" content="#00000" />
        <meta
          name="description"
          content="Profesionální webové stránky a webové aplikace na míru. Již od 5000 Kč. Kalkulace konečné ceny on-line!"
        />

      </Head>
      <Header />
      <Leading />
      <Offer />
      <Graph />
      <About />

    </div>



  )



};

