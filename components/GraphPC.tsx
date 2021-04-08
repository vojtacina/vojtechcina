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
            <div className={(firstActive && "bg-gray-300 shadow-big ") + " py-6px px-12px  rounded-lg transition duration-200 z-20"}>Moderní web</div>
            <div className={(!firstActive && "bg-gray-300 shadow-big ") + " py-6px px-12px  rounded-lg transition duration-200  z-20"}>Klasický web</div>
        </div>
    )
}

export default function Graph() {

    const [activeFirstPage, setActiveFirstPage] = useState(true)

    return (
        <div className="w-full flex justify-center px-20px mb-60px">
            <div className="w-full max-w-6xl flex flex-col items-center">
                <div className="w-full flex items-center flex-col mt-50px">
                    <div className="text-center text-16 font-semibold">Zavolejte mi a domluvíme se</div>
                    <div className="text-center text-16 font-regular">Brzy váš problém vyřeším. A pokud ne, vrátím Vám všechny peníze.</div>
                    <Link href="tel:+420774148327">
                        <div className="text-center text-16 font-regular h-65px bg-green-500 flex items-center justify-center px-50px rounded-lg my-20px font-medium select-none cursor-pointer hover:bg-green-400">Zavolat na číslo +420 774 148 327</div>
                    </Link>
                    <div className="text-center text-16 font-regular">Pokud nebudete spokojeni, dám Vám <span className="uppercase px-4px py-2px bg-black font-semibold rounded text-green-300 text-14">500 Kč</span> navíc jako omluvu.<br />Nic neriskujete 🙂.</div>
                </div>
            </div>
        </div>
    )
}