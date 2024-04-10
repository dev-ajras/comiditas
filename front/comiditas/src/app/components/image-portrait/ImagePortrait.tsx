import Image from "next/image"

export default function ImagePortrait (){
    return (
        <div className="flex flex-col items-center w-auto rounded-lg text-black">
        <Image className="bbg-slate-100 border-8 rounded-2xl overflow-hidden" src={"/chicken.jpg"} layout="responsive" width={100} alt="pollito" height={100}/>
        <h1 className="bg-slate-100 text-xl my-3">POLLO CON ARROZ</h1>
        </div>
    )
}