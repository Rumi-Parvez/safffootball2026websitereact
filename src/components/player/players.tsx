import { use, useState, type Dispatch, type SetStateAction } from "react"
import type { playerType } from "../../type"
import { Avialableplayers } from "./avialableplayers"
import { SelectedPloayers } from "./selectedPloayers"


interface PlayersProps{
    plyerPromise : Promise<playerType[]>
    coin : number
    SetCoin : Dispatch<SetStateAction<number>>
}

type ActiveType = "available" | "Selected"

export function Players({plyerPromise , coin  , SetCoin} : PlayersProps ) {
    const players = use(plyerPromise)

    const [active , setActive] = useState<ActiveType>("available")

    const handleBtnActive = (type: ActiveType): void => {
        setActive(type)
    }

    const [selectedPlayer , setSelectedPlayer] = useState<playerType[]>([])
    return (
        <>

        <div >
            <div className="flex justify-between py-5 px-8">
                <h1 className="text-purple-800 text-2xl font-bold font-sans">{active === "available" ? "All Players" : "Selected Players" }</h1>
                <div>
                    <button className={active === "available"? "btn btn-active bg-lime-300 rounded-r-none" : "btn rounded-r-none"} onClick={()=> handleBtnActive ("available")}>Active</button>

                    <button className={active === "Selected"? "btn btn-active bg-lime-300 rounded-l-none" : "btn rounded-l-none"}  onClick={()=> handleBtnActive ("Selected")}>Selected</button>
                </div>
            </div>
            {active === "available" ? <Avialableplayers players={plyerPromise} coin={coin} SetCoin={SetCoin} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}/> : <SelectedPloayers selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}></SelectedPloayers>}
        </div>
        
        </>
    )
}