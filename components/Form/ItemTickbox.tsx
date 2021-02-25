
interface Props {
    data: any,
    setter: any
}


export default function ItemTickbox({data, setter}: Props) {

    const {name, active} = data


    return(

        <div onClick={() => setter(name, !active)} className={"cursor-pointer flex items center "+(active ? " " : " ")}>
            <div className="flex-grow-0 flex items-center">
                <div className={"rounded-full w-16px h-16px mr-12px flex items-center font-light text-12 justify-center transform transition duration-150 "+(active ? " bg-green-400 text-white scale-125 " : " bg-transparent border text-transparent border-gray-300 scale-100 ")}>
                √
                </div>
            </div>
            <div className={"flex-grow transition-all duration-150 "+(active ? " text-white font-medium" : "text-gray-300 font-normal")}>
            {name}
            </div>
           
            </div>
    )
}