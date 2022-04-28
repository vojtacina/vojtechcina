// import Image from 'next/image' 

import Link from "next/link";
import { ArrowDown, ArrowSquareOut, ArrowSquareUpRight } from "phosphor-react";


export default function Leading() {

    return (
        <div className="w-full relative" >
            <div className="main-bg w-full text-center h-auto py-30px md:h-400px md:min-h-400px relative px-20px ">
                <div className={"z-20 flex flex-col items-center justify-center h-full transition duration-300 translate-y-20px transform "}>
                    <div className="block text-gray-400"></div>
                    <div className="text-24 sm:text-36 lg:text-55 xl:text-64  font-semibold block w-full px-20px font-quicksand mb-20px"><h1>Buďte konečně vidět na internetu!</h1></div>
                    <div className="block w-2/3 text-gray-200" >Postarám se o všechny digitální aktivity vaší firmy.
                        {/* <span className="uppercase px-4px py-2px bg-emerald-500 font-semibold rounded text-white text-14">DNES</span> */}
                    </div>
                    <div className="mt-20px flex flex-col w-full md:flex-row items-center justify-center gap-8px">
                        <Link href="https://voj.notion.site/d32d1aec6e6b4cbcad7a1e762cd715e3?v=f58a98d17957461cb32c2b268bf7ba1d">
                            <a target='_blank' className="text-center text-16 font-regular h-45px bg-gray-800 flex items-center justify-center px-20px rounded-lg my-10px font-medium select-none cursor-pointer hover:bg-gray-700">
                                <div>Reference</div>
                            </a>
                        </Link>
                        {/* <div className="hidden md:block">
                            <Link href="https://voj.notion.site/Kontakt-fb03fcd95ae2480e9c9f84f216cf5640">
                                <a target='_blank' className="text-center text-16 font-regular h-45px bg-emerald-600 flex items-center justify-center px-20px rounded-lg my-10px font-medium select-none cursor-pointer hover:bg-emerald-500">Získat nabídku</a>
                            </Link>
                        </div> */}
                    </div>
                    <div className="mt-20px text-gray-400">
                        <ArrowDown size={32} weight="thin" />
                    </div>
                </div>
                {/* <div className="absolute top-0 left-0 right-0 bottom-0  transform load ">
                    <Image src="/img/hand.jpg" layout="fill" objectFit="cover" objectPosition="bottom" />
                </div> */}
            </div>
        </div>
    )
}