import { useState } from 'react'
import {motion} from 'framer-motion'

export default function Start() {

    const [selected, setSelected] = useState(null as any)

    return (
        <div>
            <motion.div
            initial={false}
            
            className="w-full flex justify-center px-20px md:px-36px transform  -translate-y-60px">
                <div className={"w-full transition duration-300 max-w-6xl rounded-lg backdrop border border-gray-800 "}>
                    <div className="w-full text-center mt-20px font-semibold "><h2>Vyberte si prosím, o co máte zájem</h2></div>
                    <div className={"grid px-20px grid-cols-1 md:grid-cols-3 mt-20px max-h-full overflow-hidden relative transition-all duration-100 mb-20px "}>
                        <motion.div 
                        initial={false}
                        whileTap={{
                            scale: 0.95
                        }}
                        whileHover={{
                            scale: 1.025
                        }}
                        onClick={() => setSelected("web")} className={" hover:scale-105 transform  cursor-pointer rounded-lg flex justify-center flex-col  transition duration-200 m-20px p-16px text-center " + (selected == "web" ? " bg-green-400 text-white " : " hover:bg-gray-800 ")}>
                            <h3 className="text-24 font-semibold pb-8px">Tvorba webu</h3>
                            <p className={(selected == "web") ? " text-black " : "text-white"}>Díky webu vás na internetu najde spousta dalších lidí, kteří by si vás jinak třeba ani nevšimli.</p>
                            <p className={(selected == "web") ? " text-black " : "text-white"}> Součásti může být i vytvoření, správa a poradenství ohledně sociálních sítí (Facebook, Instagram)</p>
                        </motion.div>
                        <motion.div 
                        initial={false}
                        whileTap={{
                            scale: 0.95
                        }}
                        whileHover={{
                            scale: 1.025
                        }}
                        onClick={() => setSelected("grafika")} className={" hover:scale-105 transform  cursor-pointer rounded-lg flex justify-center flex-col  transition duration-200 m-20px p-16px text-center " + (selected == "grafika" ? " bg-green-400 text-white " : " hover:bg-gray-800 ")}>
                            <h3 className="text-24 font-semibold pb-8px">Grafika, letáky, logo,..</h3>
                            <p className={(selected == "grafika") ? " text-black " : "text-white"}>Pokud začínáte podnikat nebo už značku máte a chcete mít jasně daný styl, který vás nejen odliší od konkurence, ale také přitáhne zvědavé zákazníky, rád vám s tím pomohu.</p>
                        </motion.div>
                        <motion.div 
                        initial={false}
                        whileTap={{
                            scale: 0.95
                        }}
                        whileHover={{
                            scale: 1.025
                        }}
                        onClick={() => setSelected("poradenstvi")} className={" hover:scale-105 transform  cursor-pointer rounded-lg flex justify-center flex-col  transition duration-200 m-20px p-16px text-center " + (selected == "poradenstvi" ? " bg-green-400 text-white " : " hover:bg-gray-800 ")}>
                            <h3 className="text-24 font-semibold pb-8px">Poradenství</h3>
                            <p className={(selected == "poradenstvi") ? " text-black " : "text-white"}>Možná si nejste jistí, co vlastně budete potřebovat. Rád se s vámi spojím a domluvíme se na ideálním postupu.</p>
                            <p className={(selected == "poradenstvi") ? " text-black " : "text-white"}>Můžeme si popovídat o propagaci, grafice, webu nebo sociálních sítích. Vše spolu navrhneme a naplánujeme pokud žádnou představu zatím nemáte. </p>
                        </motion.div>
                    </div>
                    <div className="w-full h-1px bg-black"></div>
                    <div className="w-full text-center flex items-center justify-center my-12px">

                    </div>







                </div>
            </motion.div>
        </div>
    )
}