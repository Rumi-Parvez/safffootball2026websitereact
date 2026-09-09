import { use } from "react"
import type { playerType } from "../../type"
import { CardPlayers } from "./cardPlayers"


interface PlayersProps{
    playerDataPermisson : Promise<playerType[]>
}

export function Players({playerDataPermisson} : PlayersProps ) {
    const players = use(playerDataPermisson)
    return (
        <>

        <div>
            {
                players.map(player => <CardPlayers key={player.id} {...player}  ></CardPlayers> )
            }
        </div>
        
        </>
    )
}