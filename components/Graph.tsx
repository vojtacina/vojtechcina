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
                    // @ts-expect-error
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
                <h2 className="w-full font-medium text-24 text-center py-20px">{activeFirstPage ? "Proč web ode mě?" : "Web od velké firmy"}</h2>
                <div className="w-full md:w-1/3 text-16 text-center">{activeFirstPage ? "Se mnou platíte za skutečně odvedenou práci na vteřiny přesně. 100 % vašeho rozpočtu bude využito k práci na vašem webu. Vrátí se Vám to." : "Firma zdlouhavě dokončuje zakázku a svým zaměstnancům vyplatí minimum toho, co jste zaplatili."}</div>
                <div className="w-full md:w-1/3 text-16 text-center mt-8px">{activeFirstPage ? "Vím, že tvorba webů mě živí a musím odvádět kvalitní práci. Na to se můžete spolehnout." : "Zaměstnanci takové zakázky dělají bez zájmu a projeví se to na kvalitě webu."}</div>
                <div className="w-full mt-6px md:w-1/3 text-16 text-center">{activeFirstPage ? <span>Kvalita webu = více než <span className="text-emerald-400 font-semibold">90 %</span> - to dokládají i měřící nástroje Googlu, kde mé weby dosahují vynikajících výsledků (tzv. Core web vitals) </span> : <span>Kvalita webu = méně než <span className="text-red-400 font-semibold">45 %</span> - za hodně peněz málo muziky. Obchodní oddělení vás přesvědčí i o tom, co jste vůbec nechtěli a váš web pak neodpovídá tomu, co jste původně chtěli.</span>}</div>
                <SelectGoodOrBadWeb firstActive={activeFirstPage} setFirstActive={(what: boolean) => setActiveFirstPage(what)} />
                <div className="w-full grid grid-cols-1 md:grid-cols-3">
                    <div className="block h-300px md:h-full mb-20px md:mb-0 f w-full">
                        <div className="md:pb-full relative w-full h-300px select-none">
                            <Image alt='Graf zelený' src={activeFirstPage ? "/img/graph_green.svg" : "/img/graph_red.svg"} layout="fill" objectFit="contain" loading="eager" unoptimized={true} />
                        </div>
                    </div>
                    <div className="block  md:pl-30px px-12px md:pr-0 h-full ">
                        <Label color={activeFirstPage ? "bg-emerald-400" : "bg-gray-400"} heading="Kvalitní a především váš web" text="Web, který dostanete bude přesně takový, jaký si ho vysníte. Neexistují žádné limity ve funkcích nebo vzhledu webu. O váš web se rád postarám, ale dostanete zdrojový kód webu a dokumentaci například pro budocí webmastery." />
                        <Label color={activeFirstPage ? "bg-emerald-500" : "bg-gray-500"} heading="Zaručeně férové jednání" text="Nemám vás na háku a najdu si vždy dostatek času, abychom se domluvili na přesné podobě webu a dalších podrobnostech. Nemusíte být počítačový mág, domluva je věcná a jasná." />
                        <Label color={activeFirstPage ? "bg-emerald-600" : "bg-red-400"} heading="Vizuálně příjemný zážitek" text="Webové stránky budou hezké a odovídat moderním trendům. Neskončí tak v propadlišti internetu." />
                    </div>
                    <div className="block md:pl-30px px-12px md:pr-0 h-full ">
                        <Label color={activeFirstPage ? "bg-green-700" : "bg-red-500"} heading="Technické pozadí webu" text="Kompletní web musí jít vyhledat na internetu. Proto všechny mé weby mají nastavené SEO na vysoké úrovni. Vše spojené se správou webu nemusíte vůbec řešit." />
                        <Label color={activeFirstPage ? "bg-gray-500" : "bg-red-600"} heading="Zastaralé technologie" text="Nepoužívám žádné zastaralé technologie, ale jen ty nejmodernější. Máte jistotu, že váš web bude stále skvělý, zatímco konkurenci se bude rozpadat." />
                        <Label color={activeFirstPage ? "bg-gray-600" : "bg-red-700"} heading="S webem budete mít práci navíc" text="Já po vás nikdy nebudu chtít ani trochu složité technické dovednosti. Veškeré vaše činnosti spojené s webem můžou být tak jednoduché, že by to zvládlo i dítě." />
                        <Label color={activeFirstPage ? "bg-gray-700" : "bg-red-800"} heading="Utratíte majlant" text="Jinde možná ano. Já se držím rozpočtu." />
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
                        <div className="text-center text-16 font-regular h-65px bg-emerald-500 flex items-center justify-center px-50px rounded-lg my-20px font-medium select-none cursor-pointer hover:bg-emerald-400">jsem@vojtechcina.cz</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}