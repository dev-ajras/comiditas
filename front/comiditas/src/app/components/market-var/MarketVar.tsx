import Image from "next/image"

export default function MarketVar (){
    return (
        <div className="bg-slate-100 flex items-center justify-center w-full h-28 text-black">
        <div className="w-2/6 text-center">
        <button className="bg-pink-500 h-24 w-27 rounded-full border-black border-4"><Image src={"/coto-logo.png"} width={90} alt="pollito" height={90}/></button>
        </div>
        <div className="w-2/6 text-center">
        <button  className="bg-cyan-400 h-24 w-26 rounded-full border-black border-4"><Image src={"/carrefour-logo.svg"} width={90} alt="pollito" height={90}/></button>
        </div>
        <div className="w-2/6 text-center">
        <button className="bg-red-500 h-24 w-26 rounded-full border-black border-4"><Image src={"/dia-logo.webp"} width={90} alt="pollito" height={90}/></button>
        </div>
        </div>
    )
}