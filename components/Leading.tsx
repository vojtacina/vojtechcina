import Image from 'next/image'



export default function Leading() {


    return (
        <div className="w-full"> 
            <div className="w-full text-center mt-60px 2xl:mt-120px h-300px lg:h-400px xl:h-500px  relative ">
                <div className="absolute top-0 left-0 right-0 bottom-0 z-20 flex flex-col items-center">
                    <div className="block">Vytvořím </div>
                    <div className="text-36 md:text-64  font-light block"><h1>Web rychlý jako blesk</h1></div>
                    <div className="block w-2/3" >a to včetně grafiky, SEO optimalizace, SSL certifikátu a s doménou <span className="uppercase px-4px py-2px bg-green-500 font-bold rounded text-white text-14">ZDARMA</span>.</div>
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 appear transform  ">
                    <Image src="/img/hand.jpg" layout="fill" objectFit="cover" objectPosition="bottom" />
                </div>




            </div>
        </div>
    )
}