import { FaDollarSign, FaUser } from "react-icons/fa";
import type { playerType } from "../../type";
import { IoFlagSharp } from "react-icons/io5";
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify/unstyled";


interface singleplayersprops {
    player : playerType
    coin : number
    SetCoin : Dispatch<SetStateAction<number>>
    selectedPlayer : playerType[]
    setSelectedPlayer : Dispatch<SetStateAction<playerType[]>>
}
export function CardPlayers({player, coin  , SetCoin , selectedPlayer , setSelectedPlayer} : singleplayersprops) {
    const [selected , setSelected] = useState(false)

    const handleBuy = () => {
        setSelected(true)
        const newCoin : number = coin - player.price ;
        
        if(newCoin >= 0) {
            
            SetCoin(newCoin)
            toast.success(`${player.name} has Succsesfully Selected`);
            
        }
        else{
            toast(`You don't have enguph ballenche`);
        }
        

        setSelectedPlayer([...selectedPlayer , player])
    }


    return (
        <>
        
        <div className="m-auto">
            <div className="w-70 space-y-1 justify-center p-4 border-2 border-gray-200 rounded-2xl">
                <img className="h-80  rounded-[10px] w-80 " src={player.img} alt="" />
                <strong className="flex items-center gap-2 mt-5"> <FaUser /> {  player.name}</strong>
                <div className="flex justify-between items-center ">
                    <h2 className="flex items-center gap-2 font-bold  "><IoFlagSharp />
                    {player.country_name}</h2>
                    <strong className="text-yellow-500">{player.rating}</strong>

                </div>
                <p>{player.football_federation_name}</p>
                <p> Position : <strong>{player.position}</strong></p>
                  <div className="divider"></div>
                  <div className="flex justify-between items-center ">
                    <h1 className="font-medium flex gap-0 items-center">Price :  <FaDollarSign /><strong>{player.price}</strong></h1>
                    <button className={selected ? "btn btn-active btn-info text-gray-300 bg-gray-400 border-none" : "btn btn-active btn-info text-white bg-lime-400 border-none"} onClick={handleBuy} disabled={selected} >{selected ?   "Selected":"Buy Player"}  </button>
                    

                  </div>

            </div>
        </div>
        </>
    )
}