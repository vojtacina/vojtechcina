
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import { Check, HourglassMedium, PaperPlaneTilt, PhoneIncoming } from "phosphor-react";
import React, { useRef, useState } from "react";
import About from "../components/About";
// import Contact from '../components/Contact'
import useOnClickOutside from "../components/hooks/clickOutside";
import Leading from "../components/Leading";

export default function Home() {

  const [clicked, setClicked] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null as any);
  const [sent, setSent] = useState(false);
  const [success, setSuccess] = useState(false);
  const ref = useRef(null as any)

  useOnClickOutside(ref, () => setClicked(false))

  async function sendMessage() {

    if (phoneNumber?.length > 8 && !sent) {
      setSent(true)
      axios.post("/api/sms", { body: (phoneNumber + " prosí o zavolání do 24h ohledně tvorby webu.") }).then((res) => {
        if (res.data.success) {
          setClicked(false)
          setPhoneNumber(false)
          setSent(false)
          setSuccess(true)
        }
        else {
          alert("Došlo k chybě")
        }
        console.log(res)
      })
    }



  }

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

        {success ?
          <div className="text-center gap-6px text-16 font-regular h-45px bg-gray-800 flex items-center justify-center px-20px rounded-lg my-10px font-medium select-none cursor-pointer">
            <Check size={24} />
            <div className="">Brzy se Vám ozvu. 🙂</div>
          </div>
          :
          <div onClick={() => setClicked(true)} className="text-center gap-6px text-16 font-regular h-45px bg-emerald-600 flex items-center justify-center px-20px rounded-lg my-10px font-medium select-none cursor-pointer hover:bg-emerald-500">
            <PaperPlaneTilt size={24} />
            <div className="">Získat nabídku</div>
          </div>
        }

      </div>
      <AnimatePresence>
        {clicked &&
          <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={" z-50 fixed top-0 bottom-0 left-0 right-0 bg-black backdrop bg-opacity-40 flex justify-center items-end md:items-center "}>
            <motion.div
              exit={{ opacity: 0, scale: 1, y: 100 }}
              initial={{ opacity: 0, scale: 1, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className=" overflow-y-hidden max-h-screen overflow-x-hidden hide-scroll pb-0 md:pb-48px w-full md:w-auto "
            >
              <div ref={ref} className="bg-black border-t md:border border-gray-800 p-20px md:rounded-lg w-full md:w-auto  ">
                {/* <div className="mb-12px">Zadejte své telefonní číslo prosím</div> */}
                <div className="block md:hidden mb-12px text-14">Ozvu se Vám do 24 hodin a zeptám se vás na vše podstatné.</div>
                <div className="flex flex-col md:flex-row items-stretch gap-8px">
                  <input onChange={(el) => setPhoneNumber(el.target.value)} type="tel" name="phone" placeholder="Vaše telefonní číslo" className=" rounded-lg shadow-ontop w-full px-16px h-45px md:h-auto md:py-16px focus:outline-none text-18 text-black tracking-wide"></input>
                  <div onClick={() => {
                    sendMessage()
                  }} className={`text-center flex-nowrap gap-6px h-45px md:h-auto text-16 font-regular bg-emerald-600 ${sent ? "bg-gray-800" : "bg-emerald-600 hover:bg-emerald-500"} flex items-center justify-center px-20px rounded-lg font-medium select-none cursor-pointer `}>
                    {sent ?
                      <HourglassMedium size={24} />
                      :
                      <PhoneIncoming size={24} />
                    }
                    <div className=" whitespace-nowrap flex-nowrap">{sent ? "Ověřování..." : "Potvrdit"}</div>
                  </div>
                </div>
                <div className="hidden md:block mt-12px text-14">Ozvu se Vám do 24 hodin a zeptám se vás na vše podstatné.</div>
              </div>

            </motion.div>

          </motion.div>
        }
      </AnimatePresence>

    </div>



  )



};

