import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Animated } from "react-animated-css";
import Link from 'next/link'

interface LabelProps {
    color: string,
    heading: string,
    text?: string
}

function Label({ color, heading, text }: LabelProps) {

    const [touched, setTouched] = useState(false)

    function handleWindowSizeChange() {
        if (window.innerWidth > 1000) {
            setTouched(true)
        }
        else {
            setTouched(false)
        }
    }

    useEffect(() => {
        handleWindowSizeChange()
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }

    }, [])

    return (
        <div className="w-full flex items-top py-12px">
            <div className={"w-30px h-30px rounded-full mr-12px flex-shrink-0 flex-grow-0 transition duration-200  " + color}>

            </div>
            <div>
                <h3 className="font-medium mt-4px cursor-pointer " onClick={() => setTouched(!touched)}>{heading}</h3>
                {(text) &&
                    <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={300} isVisible={touched} className={(touched ? "block" : "hidden") + " lg:block font-light"}><div key={heading + "_text"}>{text}</div></Animated>
                }
            </div>
        </div>

    )
}

interface SelectProps {
    firstActive: boolean,
    setFirstActive: any,
}

function SelectGoodOrBadWeb({ firstActive, setFirstActive }: SelectProps) {
    return (
        <div className="flex bg-gray-700 font-medium text-black rounded-lg text-14 my-30px select-none cursor-pointer" onClick={() => setFirstActive(!firstActive)}>
            <div className={(firstActive && "bg-gray-300 shadow-big ") + " py-6px px-12px  rounded-lg transition duration-200 z-20"}>Web ode mě</div>
            <div className={(!firstActive && "bg-gray-300 shadow-big ") + " py-6px px-12px  rounded-lg transition duration-200  z-20"}>Klasický web</div>
        </div>
    )
}

export default function Graph() {

    const [activeFirstPage, setActiveFirstPage] = useState(true)

    return (
        <div className="w-full flex justify-center px-20px my-60px">
            <div className="w-full max-w-6xl flex flex-col items-center">
                <h2 className="w-full font-medium text-24 text-center py-20px">{activeFirstPage ? "Proč web ode mě?" : "Jak dělají weby ostatní"}</h2>
                <div className="w-full md:w-1/3 text-16 text-center">{activeFirstPage ? "Umím udělat web, který Vám přináší prodeje tím i jasný zisk. Postarám se o to." : "Někdo dělá weby opačným způsobem a zaměřuje se pouze na vzhled a ego. Takový web ale nefunguje."}</div>
                <div className="w-full mt-6px md:w-1/3 text-16 text-center">{activeFirstPage ? <span>Kvalita webu = více než <span className="text-green-400 font-semibold">85 %</span></span> : <span>Kvalita webu = méně než <span className="text-red-400 font-semibold">45 %</span></span>}</div>
                <SelectGoodOrBadWeb firstActive={activeFirstPage} setFirstActive={(what: boolean) => setActiveFirstPage(what)} />
                <div className="w-full grid grid-cols-1 md:grid-cols-3">
                    <div className="block h-300px md:h-full mb-20px md:mb-0 f w-full">
                        <div className="md:pb-full relative w-full h-300px select-none">
                            <Image src={activeFirstPage ? "/img/graph_green.svg" : "/img/graph_red.svg"} layout="fill" objectFit="contain" />
                        </div>
                    </div>
                    <div className="block  md:pl-30px px-12px md:pr-0 h-full ">
                        <Label color={activeFirstPage ? "bg-green-400" : "bg-gray-400"} heading="SEO optimalizace" text="Pokud to s webem myslíte vážně, váš web musí být vyhledatelný na internetu. Využijte celý potenciál neplaceného dosahu." />
                        <Label color={activeFirstPage ? "bg-green-500" : "bg-gray-500"} heading="Reklama" text="Reklama představuje snadný a efektivní způsob, jak rychle získat návštěvníky webu a získat výhodu před konkurencí. Pokud chcete co nejdříve generovat příjem, rozhodně zvažte investici do kvalitní reklamy." />
                        <Label color={activeFirstPage ? "bg-green-600" : "bg-red-400"} heading="Uživatelský zážitek a grafika" text="Responzivní a rychlý web je základ. Přehledný a čistý vzhled je dokonalost. Nenechte design hrát proti Vám. Uživatelský zážitek musí být příjemný. Hnusné weby nedělám. Uvidíte." />
                    </div>
                    <div className="block md:pl-30px px-12px md:pr-0 h-full ">
                        <Label color={activeFirstPage ? "bg-green-700" : "bg-red-500"} heading="Stránka referencí" text="Na reference se zákazníci dívají až jako na poslední věc. Klíčové je ale to, co se stane před tím." />
                        <Label color={activeFirstPage ? "bg-gray-500" : "bg-red-600"} heading="Kontaktní formulář" text="Stačí uvést email a telefon. Lepší řešení je on-line kalkulace ceny, se kterou vám rád pomohu." />
                        <Label color={activeFirstPage ? "bg-gray-600" : "bg-red-700"} heading="Sekce blog nebo novinky" text="Web, který generuje zisk, nepotřebuje novinky. Nikdo je nečte. Investujte čas raději do produktu." />
                        <Label color={activeFirstPage ? "bg-gray-700" : "bg-red-800"} heading="Efekty, animace a speciální funkce" text="Web není šperk, který má být dokonalý. Má fungovat a prodávat. A o to se postarám." />
                        <Label color={activeFirstPage ? "bg-gray-800" : "bg-red-900"} heading="O nás" text="Historické údaje o vaší firmě prodeje nezvýší." />
                    </div>
                </div>
                <div className="w-full flex items-center flex-col mt-50px">
                    <div className="text-center text-16 font-semibold">Tak co, zkusíme to spolu?</div>
                    <div className="text-center text-16 font-regular">Pokud nebudete spokojeni, vrátím Vám bez jediného kecu peníze.</div>
                    <div className="flex flex-col items-start my-12px text-green-300">
                        <div >√&nbsp;&nbsp;Konzultace a poradenství správné strategie</div>
                        <div >√&nbsp;&nbsp;Vytvoření grafického návrhu</div>
                        <div >√&nbsp;&nbsp;Vytvoření kompletního webu</div>
                        <div >√&nbsp;&nbsp;SEO optimalizace v ceně</div>
                        <div >√&nbsp;&nbsp;Doména ke každému webu na 1 rok zdarma</div>
                        <div >√&nbsp;&nbsp;Neomezený počet revizí</div>
                        <div >√&nbsp;&nbsp;Možnost propagace na Google Ads a Facebooku</div>
                    </div>
                    <div className="text-center text-16 font-regular">Napište mi na e-mail:</div>
                    <Link href="mailto:jsem@vojtechcina.cz">
                        <div className="text-center text-16 font-regular h-65px bg-green-500 flex items-center justify-center px-50px rounded-lg my-20px font-medium select-none cursor-pointer hover:bg-green-400">jsem@vojtechcina.cz</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}