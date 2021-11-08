import Image from 'next/image'
import Link from 'next/link'


export default function About() {


    return (

        <div className="w-full flex justify-center px-20px my-60px relative bg-opacity-30">
            <div className="w-full max-w-6xl">
                <div className="w-full font-light text-36 text-center py-20px z-10">Kdo jsem</div>
                <div className=" grid grid-cols-1 md:grid-cols-2 z-10 gap-x-30px">
                    <div className="w-full h-200px md:h-full relative select-none order-2 md:order-1 rounded-xl overflow-hidden">
                        <Image src="/img/myface.jpg" layout="fill" objectFit="cover" />
                    </div>
                    {/* <div className="w-full h-200px md:h-full /relative select-none order-2 md:order-1 z-0">
                        <Image src="/img/vojta_green.jpg" layout="fill" objectFit="contain" className="object-left z-0" />
                    </div> */}
                    {/* <div className="absolute h-full w-full top-0 bottom-0 left-0 right-0 bg-black md:bg-transparent md:bg-gradient-to-r bg-gradient-to-b from-transparent to-black bg-opacity-50"></div> */}
                    <div className="md:w-2/3  flex items-center order-1 md:order-2 z-10">
                        <div className="py-30px">
                            <div>Jmenuji se Vojtěch Cina a nabízím vám služby v oblasti tvorby webových stránek na míru včetně grafického designu. </div>
                            <div className="mt-6px">Ukázkové reference zašlu na vyžádání (kvůli GDPR). </div>
                            <div className="py-20px text-18 font-light">Moje zkušenosti:</div>
                            <div className="">
                                <ul className="list-disc pl-30px">
                                    <li><span className="font-semibold">5 let</span> zkušeností s tvorbou webu pro malé i velké podniky (rád zašlu ukázky)</li>
                                    <li><span className="font-semibold">2 roky</span> bohatých zkušeností s tvorbou designu, grafiky a uživatelských rozhraní. Mám cit pro detail.</li>
                                    <li><span className="font-semibold">Klíčové</span> dovednosti pro propagaci webu (SEO optimalizace + propagace)</li>
                                </ul>
                            </div>
                            <div className="py-20px text-18 font-light">Úspěchy v soutěžích:</div>
                            <div className="">
                                <ul className="list-disc pl-30px">
                                    <li><span className="font-semibold">1. místo</span> v celostátním kole soutěže v programování kancelářských aplikací </li>
                                    <li><span className="font-semibold">1. místo</span> Talent Olomouckého kraje v technickém a dovednostním oboru  </li>
                                    <li><span className="font-semibold">25. místo</span> v celostátním kole soutěže v programování webových stránek   </li>
                                    <li><span className="font-semibold">4. místo</span> v krajském kole soutěže v programování webových stránek   </li>
                                    <li><span className="font-semibold">1. místo</span>  v okresním kole soutěže v programování webu   </li>
                                </ul>
                            </div>
                            <div className="py-20px text-18 font-light">Kontaktní údaje:</div>
                            <div className="">
                                <ul className="list-disc pl-30px">
                                    <li>Úvoz 445/116 Brno-Veveří</li>
                                    <li>jsem@vojtechcina.cz</li>
                                    <li>+420 774 148 327</li>
                                    <li>IČO: 09902287</li>
                                </ul>
                            </div>
                            <Link href="/oprava-pc-brno">
                                <div className="my-20px font-semibold cursor-pointer hidden ">Opravuji počítače v Brně</div>
                            </Link>
                        </div>


                    </div>
                </div>


            </div>
        </div>

    )
}
