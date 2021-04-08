import { useState } from 'react'
import ItemTickbox from './Form/ItemTickbox'

export default function Offer() {

    const [opened, setOpened] = useState(false)

    let [items, setItems] = useState([
        { name: "Počítač je pomalý", active: false, price: 590 },
        { name: "Sekají se mi filmy a videa", active: false, price: 590 },
        { name: "Počítač nejde zapnout", active: false, price: 1100 },
        { name: "Nevím si s něčím rady", active: false, price: 370 },
        { name: "Potřebuji nainstalovat systém", active: false, price: 890 },
        { name: "Počítač je příliš hlasitý", active: false, price: 1250 },
        { name: "Počítač je zavirovaný", active: false, price: 970 },
        { name: "Málo místa na disku", active: false, price: 570 },
        { name: "Počítač se dlouho načítá", active: false, price: 670 },
        { name: "Nefunguje zvuk nebo nejde přehrát video", active: false, price: 450 },
        { name: "Nefunguje mi internet", active: false, price: 450 },
        { name: "Nefunguje mi tiskárna", active: false, price: 450 },
        { name: "Chci se naučit ovládat Word", active: false, price: 4600 },
        { name: "Chci se naučit ovládat Excel", active: false, price: 5700 },
        { name: "Chci se naučit ovládat PowerPoint", active: false, price: 2500 },
        { name: "Chci se naučit používat internet", active: false, price: 2600 },
        { name: "Mám jiný problém", active: false, price: 1400 },
    ])


    const setter = function setItem(name: string, toWhat: any) {
        let newArr = [...items]; // copying the old datas array
        newArr.filter(row => row.name == name)[0].active = toWhat;
        setItems(newArr);
    }

    function SumPrice() {
        let newArr = [...items]; // copying the old datas array
        let sum = 0
        newArr.filter(row => row.active == true).forEach(function (theLine) {
            sum = sum + theLine.price
        })

        /*  if (newArr.filter(row => row.name == "Web na splátky (12 měsíců)")[0].active == true) {
             sum = Math.floor(sum/12)
         } */

        return (sum)
    }

    function naSplatky() {
        /*   let newArr = [...items]; // copying the old datas array
          if (newArr.filter(row => row.name == "Web na splátky (12 měsíců)")[0].active == true) {
              return (" měsíčně")
          }
          else { 
              return ("")
          } */

        return ("")
    }


    return (
        <div>
            <div className="w-full flex justify-center px-20px md:px-36px transform  -translate-y-60px">
                <div className="w-full max-w-6xl bg-dark  rounded-lg ">
                    <div className="w-full text-center mt-20px font-semibold "><h2>Co Vás na počítači trápí?</h2></div>
                    <div className={"grid grid-cols-1 md:grid-cols-2 mt-20px max-h-full overflow-hidden relative transition-all duration-100" + (!opened ? " h-400px md:h-200px mb-0" : " mb-20px ")}>
                        {items.map((line, i) =>
                            <div key={i + line.name} className="px-30px py-6px">
                                <ItemTickbox data={line} setter={setter} />
                            </div>

                        )}
                        <div className={(opened && "hidden ") + " absolute left-0 right-0 bottom-0 h-80px cursor-pointer gradient-more transition duration-150 flex justify-center items-end font-medium transform hover:scale-105 pb-20px"} onClick={() => setOpened(true)}>▼&nbsp;&nbsp;Zobrazit vše&nbsp;&nbsp;▼</div>
                    </div>
                    <div className="w-full h-1px bg-black"></div>
                    <div className="w-full text-center flex items-center justify-center my-12px">
                        <span>Odhad ceny za práci: </span><span className="ml-6px text-24 font-medium">{SumPrice()} Kč </span>&nbsp;&nbsp; {naSplatky()}
                    </div>







                </div>
            </div>
            <div className="w-full flex justify-center px-20px md:px-36px transform  -translate-y-60px pt-6px">
                {opened &&
                    <div className="max-w-6xl p-12px text-12 text-gray-400 appear text-center">Přesná cena bude stanovena až po posouzení stavu počítače</div>
                }
            </div>
        </div>
    )
}