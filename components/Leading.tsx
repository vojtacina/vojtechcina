
export default function Leading() {

    return (
        <div className="w-full relative" > 
            <div className="main-bg w-full text-center  h-400px md:h-450px relative ">
                <div className={"z-20 flex flex-col items-center pt-80px md:pt-120px transition duration-300 transform "}>
                    <div className="block text-gray-400">Vytvořím </div>
                    <div className="text-36 md:text-64  font-semibold block w-full px-12px font-quicksand "><h1>Web rychlý jako blesk</h1></div>
                    <div className="block w-2/3 text-gray-200" >a to včetně grafiky, SEO optimalizace, SSL certifikátu a s doménou <span className="uppercase px-4px py-2px bg-green-500 font-semibold rounded text-white text-14">ZDARMA</span>.</div>
                </div>
                {/* <div className="absolute top-0 left-0 right-0 bottom-0  transform load ">
                    <Image src="/img/hand.jpg" layout="fill" objectFit="cover" objectPosition="bottom" />
                </div> */}




            </div>
        </div>
    )
}