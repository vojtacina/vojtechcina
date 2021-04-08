import Header from '../components/Header/HeaderPC'
import Leading from '../components/LeadingPC'
import Offer from '../components/OfferPC'
import About from '../components/AboutPC'
import Graph from '../components/GraphPC'


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
        <title>Opravy PC Brno - přijedu k Vám</title>
        <link rel="manifest" href="/static/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
        <meta name="theme-color" content="#00000" />
        <meta
          name="description"
          content="Oprava PC, zrychlení počítače, odvirování, aktualizace Windows, instalace Windows, kurzy Excelu a Wordu"
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

