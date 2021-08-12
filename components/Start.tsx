import { useState } from 'react'
import ItemTickbox from './Form/ItemTickbox'
import {motion} from 'framer-motion'

export default function Start() {

    const [opened, setOpened] = useState(false)

    return (
        <div>
            <motion.div
            animate={{
                scale: (opened ? 0 : 1),
                opacity: (opened ? 0 : 1),
                height: (opened ? 0 : "auto")
            }}
            
            className="w-full flex justify-center px-20px md:px-36px transform  -translate-y-60px">
                <div className={"w-full transition duration-300 max-w-6xl rounded-lg " + (opened ? " w-full bg-black " : "  backdrop border border-gray-800 ")}>
                    <div className="w-full text-center mt-20px font-semibold "><h2>Vyberte si prosím, o co máte zájem</h2></div>
                    <div className={"grid px-20px grid-cols-1 md:grid-cols-3 mt-20px max-h-full overflow-hidden relative transition-all duration-100 mb-20px "}>
                        <div onClick={() => setOpened(!opened)} className="hover:bg-gray-800 hover:bg-opacity-75 cursor-pointer rounded-lg flex justify-center flex-col  transition duration-200 m-20px p-16px text-center">
                            <h3 className="text-24 font-semibold pb-8px">Tvorba webu</h3>
                            <p>Díky webu vás na internetu najde spousta dalších lidí, kteří by si vás jinak třeba ani nevšimli.</p>
                            <p> Součásti může být i vytvoření, správa a poradenství ohledně sociálních sítí (Facebook, Instagram)</p>
                        </div>
                        <div className="hover:bg-gray-800 hover:bg-opacity-75 cursor-pointer rounded-lg flex justify-center flex-col  transition duration-200 m-20px p-16px text-center">
                            <h3 className="text-24 font-semibold pb-8px">Grafika, letáky, logo,..</h3>
                            <p>Pokud začínáte podnikat nebo už značku máte a chcete mít jasně daný styl, který vás nejen odliší od konkurence, ale také přitáhne zvědavé zákazníky, rád vám s tím pomohu.</p>
                        </div>
                        <div className="hover:bg-gray-800 hover:bg-opacity-75 cursor-pointer rounded-lg flex justify-center flex-col transition duration-200 m-20px p-16px text-center">
                            <h3 className="text-24 font-semibold pb-8px">Poradenství</h3>
                            <p>Možná si nejste jistí, co vlastně budete potřebovat. Rád se s vámi spojím a domluvíme se na ideálním postupu.</p>
                            <p>Můžeme si popovídat o propagaci, grafice, webu nebo sociálních sítích. Vše spolu navrhneme a naplánujeme pokud žádnou představu zatím nemáte. </p>
                        </div>
                    </div>
                    <div className="w-full h-1px bg-black"></div>
                    <div className="w-full text-center flex items-center justify-center my-12px">

                    </div>







                </div>
            </motion.div>
        </div>
    )
}