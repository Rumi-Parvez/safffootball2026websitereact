import type { playerType } from "../../type";

export function CardPlayers(player : playerType) {
    
    return (
        <>
        
        <div>
        <h1>{player.country_name}</h1>
        </div>
        </>
    )
}