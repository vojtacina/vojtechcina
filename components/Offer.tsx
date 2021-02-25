import { useState } from 'react'
import ItemTickbox from '../components/Form/ItemTickbox'

export default function Offer() {

    let [items, setItems] = useState([
        { name: "Grafika na míru vašim představám", active: false, price: 5034 },
        { name: "Mapa prodejny nebo podniku", active: false, price: 954 },
        { name: "Fotogalerie", active: false, price: 1402 },
        { name: "Recenze", active: false, price: 1411 },
        { name: "Modul novinky", active: false, price: 3607 },
        { name: "Aktuální otevírací doba", active: false, price: 400 },
        { name: "Kalkulace ceny nebo poptávkový formulář", active: false, price: 2400 },
        { name: "Vícejazyčný web", active: false, price: 9230 },
        { name: "Rozsáhlý web (20+ stránek)", active: false, price: 7883 },
        { name: "Uživatelská sekce", active: false, price: 13678 },
        { name: "Napojení na sociální sítě", active: false, price: 210 },
        { name: "Měření návštěvnosti", active: false, price: 49 },
        { name: "Možnost měnit texty na webu", active: false, price: 4500 },
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

        return (sum)
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
                    <span>Vaše cena: </span><span className="ml-6px text-24 font-medium">{SumPrice()} Kč</span>
                </div>





            </div>
        </div>
    )
}