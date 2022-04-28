
import Link from 'next/link'









export default function Graph() {



    return (
        <div className="w-full flex justify-center px-20px mb-60px">
            <div className="w-full max-w-6xl flex flex-col items-center">
                <div className="w-full flex items-center flex-col mt-50px">
                    <div className="text-center text-16 font-semibold">Zavolejte mi a domluvíme se</div>
                    <div className="text-center text-16 font-regular">Brzy váš problém vyřeším. A pokud ne, vrátím Vám všechny peníze.</div>
                    <Link href="tel:+420774148327">
                        <div className="text-center text-16 font-regular h-65px bg-emerald-500 flex items-center justify-center px-50px rounded-lg my-20px font-medium select-none cursor-pointer hover:bg-emerald-400">Zavolat na číslo +420 774 148 327</div>
                    </Link>
                    <div className="text-center text-16 font-regular">Pokud nebudete spokojeni, dám Vám <span className="uppercase px-4px py-2px bg-black font-semibold rounded text-green-300 text-14">500 Kč</span> navíc jako omluvu.<br />Nic neriskujete 🙂.</div>
                </div>
            </div>
        </div>
    )
}