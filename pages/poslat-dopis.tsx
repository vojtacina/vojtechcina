import Header from '../components/Header/Header'
import Leading from '../components/Leading'
import Start from '../components/Start'
import About from '../components/About'
import Graph from '../components/Graph'
import Link from 'next/link'

import Head from "next/head";
import Contact from '../components/Contact'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Home() {

    const [focused, setFocused] = useState(null as any);
    const [phoneNumber, setPhoneNumber] = useState(null as any);

    const phone_numbers = [
        '774148327'
    ]


    function check() {
        if (phone_numbers.includes(phoneNumber)) {
            alert("Moc rád si od Tebe přečtu nějaký dopis. 😊 Tady je adresa: Hraničné Petrovice 73, 78306 Domašov nad Bystřicí. Vnější obal dopisu mohou vidět i další lidé, tak když to bude něco milostného, tak volitelně zamaskuj. 😁 Primárně však bydlím úplně jinde, akorát na tomto místě není žádná adresa, takže můžeš využít Zásilkovnu a poslat mi to do Z-Boxu Rovensko. Těším se. 🙌")
        }
        else {
            alert("Bohužel, tvé číslo nemám uložené. Můžeš mi zkusit zavolat. Jen tak. Když zjistím, že to číslo patří někomu koho znám, tak si ho uložím. 🙂 ")
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
            {/* <Leading /> */}
            <div className="absolute top-0 left-0 right-0 bottom-0 flex md:items-center justify-center">
                <div className="max-w-md p-20px">
                    <Link href="/" ><div className="py-30px">Zpět</div></Link>
                    <h1 className="font-semibold text-24 mb-20px">Zadej své telefonní číslo</h1>
                    <p className={"mb-20px" }>Svou adresu nechci veřejně uvádět na internetu.Pokud je tvé telefonní číslo v mém kontaktním seznamu, adresa se Ti odkryje.</p>
                    <div className="flex items-stretch gap-x-16px pb-100px">
                        <motion.div
                            animate={{ bottom: focused ? 100 : 20, left: 20, right: 20, opacity: 1, scale: 1 }}
                            initial={{ opacity: 0, bottom: -20 }}
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                            className="fixed md:static shadow-2xl">
                            <input onChange={(el) => setPhoneNumber(el.target.value)} type="tel" name="phone" placeholder="Sem napiš číslo" className=" rounded-lg shadow-ontop w-full p-16px focus:outline-none text-24 text-black tracking-widest"></input>
                        </motion.div>

                        <div onClick={() => check()} className={"text-center flex-grow text-16 font-regular h-auto bg-green-500 flex items-center justify-center p-20px rounded-lg  font-medium select-none cursor-pointer hover:bg-green-400 md:opacity-100 transition duration-500 " + (focused === false ? " opacity-100 " : " opacity-0 ")}>Ověřit</div>


                    </div>

                </div>
            </div>
            {/* <Graph />
      <About /> */}

        </div >



    )



};

