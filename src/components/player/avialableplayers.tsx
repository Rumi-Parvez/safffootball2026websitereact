import type { Dispatch, SetStateAction } from "react"
import type { playerType } from "../../type"
import { CardPlayers } from "./cardPlayers"

interface AvaiavleplaersProps {
    players : Promise<playerType[]>
    coin : number
    SetCoin : Dispatch<SetStateAction<number>>
    selectedPlayer : playerType[]
    setSelectedPlayer :Dispatch<SetStateAction<playerType[]>>
}

export async function Avialableplayers({players, coin  , SetCoin , selectedPlayer , setSelectedPlayer} : AvaiavleplaersProps) {
    const availablePlayers = await players

    return (
        <>
        <div className="grid grid-cols-5 gap-2 container m-auto "  >
                {
                availablePlayers.map(player => <CardPlayers key={player.id} player={player} coin={coin} SetCoin={SetCoin} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}></CardPlayers> )
            }
            </div>
        </>
    )
}