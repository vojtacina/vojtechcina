
import Head from "next/head";
import Contact from '../components/Contact'

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
        <title>Vojtěch Cina</title>
        <link rel="manifest" href="/static/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
        <meta name="theme-color" content="#00000" />
        <meta
          name="description"
          content=""
        />

      </Head>
      {/* <Header /> */}
      {/* <Leading /> */}
      <Contact />
      {/* <Graph />
      <About /> */}

    </div>



  )



};

