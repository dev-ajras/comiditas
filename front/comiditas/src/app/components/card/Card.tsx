import Image from "next/image"
import ImagePortrait from "../image-portrait/ImagePortrait"
import MarketVar from "../market-var/MarketVar"
import DataContainer from "../data-container/DataContainer"

export default function Card (){
    return (
    <>
        <ImagePortrait/>
        <MarketVar/>
        <DataContainer/>
        
    </>
    )
}