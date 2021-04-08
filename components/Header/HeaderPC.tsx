import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'


export default function Header() {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible, handleScroll]);


    return (
        <div className={"w-full flex p-16px fixed top-0 items-center z-50 transition duration-1000 " + (!visible && "backdrop")}>
            <div className="w-200px md:w-250px relative appear h-40px">
                <Image src="/img/Logo.svg" layout="fill" objectFit="contain" />

            </div>
            <div className="w-full flex justify-end items-center text-14 md:text-16">
                <Link href="tel:+420774148327">
                    <div className="text-center text-16 font-regular h-45px bg-green-500 flex items-center justify-center px-20px rounded-lg my-10px font-medium select-none cursor-pointer hover:bg-green-400">774 148 327</div>
                </Link>
                <div className="font-light   px-6px md:px-12px text-center cursor-pointer"></div>
            </div>
        </div>
    )
}