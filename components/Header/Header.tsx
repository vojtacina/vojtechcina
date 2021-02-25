import Image from 'next/image'
import { useEffect, useState } from 'react'


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
        <div className={"w-full flex p-16px fixed top-0  z-50 transition duration-1000 " + (!visible && "backdrop" )}>
            <div className="w-125px md:w-250px h-40px relative appear">
                <Image src="/img/Logo.svg" layout="fill" objectFit="contain" />

            </div>
            <div className="w-full flex justify-end items-center">
                <div className="font-semibold  px-6px md:px-12px text-center cursor-pointer flex-shrink-0">Poptávka</div>
                <div className="font-regular   px-6px md:px-12px text-center cursor-pointer">Reference</div>
            </div>
        </div>
    )
}