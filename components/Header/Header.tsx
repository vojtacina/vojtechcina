import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'


export default function Header() {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        setVisible(currentScrollPos < 50);

        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible, handleScroll]);


    return (
        <motion.div 
        initial={false}
        animate={{
            paddingTop: visible ? "16px" : "2px",
            paddingBottom: visible ? "20px" : "2px",
            borderColor: visible ? "transparent": '#383838'
        }}
        
        className={"w-full border-b flex px-16px bg-black bg-opacity-70 border-opacity-25 fixed top-0 items-center z-50 transition duration-1000 " + (!visible && "backdrop")}>
            <div className="w-200px md:w-250px relative appear h-40px">
                <Image src="/img/Logo.svg" layout="fill" objectFit="contain" unoptimized={true} loading="eager" />

            </div>
            <div className="w-full flex justify-end items-center text-14 md:text-16">
                <Link href="mailto:jsem@vojtechcina.cz">
                    <div className="text-center text-16 font-regular h-45px bg-green-500 flex items-center justify-center px-20px rounded-lg my-10px font-medium select-none cursor-pointer hover:bg-green-400">jsem@vojtechcina.cz</div>
                </Link>
                <div className="font-light   px-6px md:px-12px text-center cursor-pointer"></div>
            </div>
        </motion.div>
    )
}