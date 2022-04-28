
import Head from "next/head";
import Link from "next/link";
import { PaperPlaneTilt } from "phosphor-react";
import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
// import Contact from '../components/Contact'
import Graph from "../components/Graph";
import Header from "../components/Header/Header";
import Leading from "../components/Leading";
import Offer from "../components/Offer";

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
      <Leading />
      {/* <Offer /> */}
      {/* <Contact /> */}
      {/* <Graph /> */}
      <About />
      <div className="fixed bottom-0 left-0 right-0 px-20px md:pb-20px z-20 flex justify-center">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf2SXbVN4y-4BURTc7X4I5lyPhGsYa13je5FOQ7PCcPMi3m0Q/viewform?usp=sf_link">
          <a target='_blank' className="text-center gap-6px text-16 font-regular h-45px bg-emerald-600 flex items-center justify-center px-20px rounded-lg my-10px font-medium select-none cursor-pointer hover:bg-emerald-500">
            <PaperPlaneTilt size={24} />
            <div className="">Získat nabídku</div>
          </a>
        </Link>
      </div>

    </div>



  )



};

