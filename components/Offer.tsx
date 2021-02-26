import { useState } from 'react'
import ItemTickbox from '../components/Form/ItemTickbox'

export default function Offer() {

    let [items, setItems] = useState([
        { name: "Grafika na míru vašim představám", active: false, price: 5000 },
        { name: "Automatické emaily zákazníkům", active: false, price: 6000 },
        { name: "Vytvoření textů na web (copywriting)", active: false, price: 3000 },
        { name: "Mapka prodejny nebo poboček", active: false, price: 400 },
        { name: "Fotogalerie", active: false, price: 1500 },
        { name: "Recenze", active: false, price: 500 },
        { name: "Modul novinky", active: false, price: 2000 },
        { name: "Aktuální otevírací doba", active: false, price: 600 },
        { name: "Kalkulace ceny nebo poptávkový formulář", active: false, price: 2400 },
        { name: "Vícejazyčný web", active: false, price: 7000 },
        { name: "Rozsáhlý web (20+ stránek)", active: false, price: 4000 },
        { name: "Uživatelská sekce", active: false, price: 9000 },
        { name: "Vytvoření firemního e-mailu", active: false, price: 600 },
        { name: "Měření návštěvnosti a statistiky", active: false, price: 100 },
        { name: "Možnost měnit texty na webu (vlastní administrace)", active: false, price: 4500 },
        { name: "Web na splátky (12 měsíců)", active: false, price: 1000 },
    ])


    const setter = function setItem(name: string, toWhat: any) {
        let newArr = [...items]; // copying the old datas array
        newArr.filter(row => row.name == name)[0].active = toWhat;
        setItems(newArr);
    }

    function SumPrice() {
        let newArr = [...items]; // copying the old datas array
        let sum = 4900
        newArr.filter(row => row.active == true).forEach(function (theLine) {
            sum = sum + theLine.price
        })

        if (newArr.filter(row => row.name == "Web na splátky (12 měsíců)")[0].active == true) {
            sum = Math.floor(sum/12)
        }

        return (sum)
    }

    function naSplatky() {
        let newArr = [...items]; // copying the old datas array
        if (newArr.filter(row => row.name == "Web na splátky (12 měsíců)")[0].active == true) {
            return (" měsíčně")
        }
        else { 
            return ("")
        }
    }


    return (
        <div className="w-full flex justify-center px-20px transform  -translate-y-60px">
            <div className="w-full max-w-6xl bg-dark  rounded-lg ">
                <div className="w-full text-center mt-20px font-semibold ">Co Váš web může umět?</div>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-20px">
                    {items.map((line, i) =>
                        <div key={i + line.name} className="px-30px py-6px">
                            <ItemTickbox data={line} setter={setter} />
                        </div>

                    )}
                </div>
                <div className="w-full text-center flex items-center justify-center my-12px">
                    <span>Vaše cena: </span><span className="ml-6px text-24 font-medium">{SumPrice()} Kč </span>&nbsp; {naSplatky()}
                </div>
                <div className="w-full h-1px bg-black"></div>
                <div className="w-full p-12px text-12">Součástí webu je vždy základní grafický návrh, responzivita, doména a hosting, SEO optimalizace a správa.</div>





            </div>
        </div>
    )
}