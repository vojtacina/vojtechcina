import Image from 'next/image'
import { useEffect, useState } from 'react'


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
        <div 
        
        className={"w-full flex px-16px  border-opacity-25 absolute top-0 items-center z-50 transition duration-1000 "}>
            <div className="w-200px md:w-250px relative appear h-40px">
                <Image src="/img/Logo.svg" layout="fill" objectFit="contain" unoptimized={true} loading="eager" alt={'Vojtěch Cina logo'} />

            </div>
            <div className="w-full flex justify-end items-center text-14 md:text-16">
                {/* <Link href="https://voj.notion.site/Kontakt-fb03fcd95ae2480e9c9f84f216cf5640">
                    <a target='_blank' className="text-center text-16 font-regular h-45px bg-emerald-600 flex items-center justify-center px-20px rounded-lg my-10px font-medium select-none cursor-pointer hover:bg-emerald-500">Kontakt</a>
                </Link> */}
               
            </div>
        </div>
    )
}