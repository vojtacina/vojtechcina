// import Image from 'next/image' 


export default function Leading() {

    return (
        <div className="w-full relative" > 
            <div className="main-bg w-full text-center h-300px md:h-400px md:min-h-400px relative ">
                <div className={"z-20 flex flex-col items-center justify-center h-full transition duration-300 translate-y-20px transform "}>
                    <div className="block text-gray-400"></div>
                    <div className="text-24 sm:text-36 lg:text-55 xl:text-64  font-semibold block w-full px-12px font-quicksand"><h1>Vojtěch Cina - webový vývojář</h1></div>
                    <div className="block w-2/3 text-gray-200" >pomohu vám uspět v on-line světě. Klidně ještě <span className="uppercase px-4px py-2px bg-green-500 font-semibold rounded text-white text-14">DNES</span>.</div>
                </div>
                {/* <div className="absolute top-0 left-0 right-0 bottom-0  transform load ">
                    <Image src="/img/hand.jpg" layout="fill" objectFit="cover" objectPosition="bottom" />
                </div> */}
            </div>
        </div>
    )
}