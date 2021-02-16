import Image from 'next/image'


export default function About() {


    return (

        <div className="w-full flex justify-center px-20px my-60px">
            <div className="w-full max-w-6xl">
                <div className="w-full font-light text-36 text-center py-20px">Kdo jsem</div>
                <div className=" grid grid-cols-1 md:grid-cols-2">
                    <div className="w-full h-200px md:h-full relative select-none order-2 md:order-1">
                        <Image src="/img/myface.jpg" layout="fill" objectFit="contain" />
                    </div>
                    <div className="md:w-2/3  flex items-center order-1 md:order-2">
                        <div className="py-30px">
                            <div>Jmenuji se Vojtěch Cina a nabízím vám služby v oblasti tvorby webových stránek na míru včetně grafického designu. Dále nabízím grafické návrhy tiskovin, webové a mediální grafiky.</div>
                            <div className="py-20px text-18 font-light">Úspěchy v soutěžích:</div>
                            <div className="">
                                <ul className="list-disc pl-30px">
                                    <li><span className="font-bold">1. místo</span> v celostátním kole soutěže v programování kancelářských aplikací </li>
                                    <li><span className="font-bold">1. místo</span> Talent Olomouckého kraje v technickém a dovednostním oboru  </li>
                                    <li><span className="font-bold">25. místo</span> v celostátním kole soutěže v programování webových stránek   </li>
                                    <li><span className="font-bold">4. místo</span> v krajském kole soutěže v programování webových stránek   </li>
                                    <li><span className="font-bold">1. místo</span>  v okresním kole soutěže v programování webu   </li>

                                 
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>


            </div>
        </div>

    )
}
