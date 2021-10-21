import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {

    const [selected, setSelected] = useState(null as any)

    return (
        <div>
            <motion.div
                initial={false}

                className="w-full mt-150px flex justify-center px-20px md:px-36px transform  -translate-y-60px">
                <div className={"w-full transition duration-300 max-w-6xl rounded-lg  "}>
                    <div className="w-full h-50px md:h-80px relative text-center font-semibold mb-40px "><Image src="/img/Logo.svg" layout="fill" objectFit="contain" unoptimized={true} loading="eager" /></div>
                    <div className={"md:flex block items-center flex-wrap justify-center "}>
                        <motion.div
                            initial={false}
                            whileTap={{
                                scale: 0.95
                            }}
                            whileHover={{
                                scale: 1.025
                            }}
                            onClick={() => setSelected("osobne")} className={" hover:scale-105 transform  cursor-pointer rounded-lg gap-x-16px flex justify-center items-center  transition duration-200 m-20px p-16px text-center " + (selected == "web" ? " bg-green-400 text-white " : " hover:bg-gray-800 ")}>
                            <Image src="/img/king.png" width={32} height={32} objectFit="contain" />
                            <h3 className="text-16 md:text-24 font-semibold pb-8px">Osobní setkání</h3>
                        </motion.div>
                        <Link href={'/poslat-dopis'}>
                            <motion.div
                                initial={false}
                                whileTap={{
                                    scale: 0.95
                                }}
                                whileHover={{
                                    scale: 1.025
                                }}
                                onClick={() => setSelected("postou")} className={" hover:scale-105 transform  cursor-pointer rounded-lg flex justify-center items-center gap-x-16px  transition duration-200 m-20px p-16px text-center " + (selected == "grafika" ? " bg-green-400 text-white " : " hover:bg-gray-800 ")}>


                                <Image src="/img/dopis.png" width={32} height={32} objectFit="contain" />
                                <h3 className="text-16 md:text-24 font-semibold pb-8px">Poslat dopis</h3>


                            </motion.div>
                        </Link>
                    </div>
                    <div className={"flex items-center flex-wrap justify-center "}>
                        <Link href="https://m.me/cinavojtech" >
                            <a target="_blank">
                                <motion.div
                                    initial={false}
                                    whileTap={{
                                        scale: 0.95
                                    }}
                                    whileHover={{
                                        scale: 1.025
                                    }}
                                    onClick={() => setSelected("telegram")} className={" hover:scale-105 transform  cursor-pointer rounded-lg flex justify-center items-center  transition duration-200  m-8px md:m-20px p-16px text-center " + (selected == "poradenstvi" ? " bg-green-400 text-white " : " hover:bg-gray-800 ")}>
                                    <Image src="/img/messenger.png" width={32} height={32} />
                                </motion.div>
                            </a>
                        </Link>
                        <Link href="https://www.instagram.com/vojtacina/" >
                            <a target="_blank">
                        <motion.div
                            initial={false}
                            whileTap={{
                                scale: 0.95
                            }}
                            whileHover={{
                                scale: 1.025
                            }}
                            onClick={() => setSelected("instagram")} className={" hover:scale-105 transform  cursor-pointer rounded-lg flex justify-center items-center  transition duration-200  m-8px md:m-20px p-16px text-center " + (selected == "poradenstvi" ? " bg-green-400 text-white " : " hover:bg-gray-800 ")}>
                            <Image src="/img/instagram.png" width={32} height={32} />
                        </motion.div>
                        </a>
                        </Link>
                        <Link href="https://www.snapchat.com/add/vojta.cina" >
                            <a target="_blank">
                        <motion.div
                            initial={false}
                            whileTap={{
                                scale: 0.95
                            }}
                            whileHover={{
                                scale: 1.025
                            }}
                            onClick={() => setSelected("snapchat")} className={" hover:scale-105 transform  cursor-pointer rounded-lg flex  items-center justify-center transition duration-200  m-8px md:m-20px p-16px text-center " + (selected == "poradenstvi" ? " bg-green-400 text-white " : " hover:bg-gray-800 ")}>
                            <Image src="/img/snapchat.png" width={32} height={32} className="object-contain" />
                        </motion.div>
                        </a>
                        </Link>
                    </div>
                    <div className={"flex items-center flex-wrap justify-center "}>
                    <a href="mailto:vojta.cina@seznam.cz" >
                        <motion.div
                            initial={false}
                            whileTap={{
                                scale: 0.95
                            }}
                            whileHover={{
                                scale: 1.025
                            }}
                            onClick={() => setSelected("snapchat")} className={" hover:scale-105 transform  cursor-pointer rounded-lg flex  items-center justify-center transition duration-200 m-8px md:m-20px p-16px text-center " + (selected == "poradenstvi" ? " bg-green-400 text-white " : " hover:bg-gray-800 ")}>
                            E-mail
                        </motion.div>
                        </a>
                    </div>
                    <div className="w-full h-1px bg-black"></div>
                    <div className="w-full text-center flex items-center justify-center my-12px">

                    </div>







                </div>
            </motion.div>
        </div>
    )
}