import Image from 'next/image'



export default function Header() {


    return (
        <div className="w-full flex p-16px sticky top-0 backdrop z-50">
            <div className="w-125px md:w-250px h-40px relative appear">
                <Image src="/img/logo.png" layout="fill" objectFit="contain" />

            </div>
            <div className="w-full flex justify-end items-center">
                <div className="font-semibold  px-6px md:px-12px text-center cursor-pointer flex-shrink-0">Co dělám</div>
                <div className="font-regular   px-6px md:px-12px text-center cursor-pointer">Poptávka</div>
            </div>
        </div>
    )
}