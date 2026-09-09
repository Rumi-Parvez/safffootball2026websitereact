import type { Dispatch, SetStateAction } from "react"
import type { playerType } from "../../type"
import { RiDeleteBin6Fill } from "react-icons/ri"
import { BiSolidMessageAltError } from "react-icons/bi"

interface SelecterProps {
    selectedPlayer : playerType[]
        setSelectedPlayer :Dispatch<SetStateAction<playerType[]>>
}

export function SelectedPloayers({selectedPlayer , setSelectedPlayer}:SelecterProps) {
    
    const handledelet = (player: playerType) => {
        const result = selectedPlayer.filter(selected => selected.id !== player.id)
        setSelectedPlayer(result)
    
    }
    
    
    return (
        <>
        <div className="mb-20">
            {selectedPlayer.length > 0 ? <div className="grid grid-cols-3 gap-0">
            
            {
                selectedPlayer.map(player => {
                    return <>
                    <div className="">
                        <div className="container ">
                            <div className=" my-5 bg-lime-100 p-5 m-10 rounded-xl items-center-safe">
                                <div className="flex  ">
                                    <img className="h-30 w-25 border-1 border-lime-500 mr-8 rounded-xl" src={player.img}alt="" />
                                    <div>
                                        <h1 className="font-bold  mt-2 ">{player.name}</h1>
                                        <p className="flex justify-between gap-4 items-center">{player.position}     <strong>{player.rating}</strong></p>
                                        <button className="btn btn-active btn-error mt-3 px-10  bg-red-500 border-1 border-rose-900 text-white " onClick={()=>handledelet(player)}><RiDeleteBin6Fill /></button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                })
            }
        </div> 
        
        : 

        <div className=" flex items-center justify-center mt-5 ">
            <div className="bg-gray-200 h-100 flex flex-col justify-center items-center w-300 rounded-2xl border-1 border-gray-300 ">
                <h1>
                    <BiSolidMessageAltError className="size-40 text-gray-600" />

                </h1>
                <h1 className="font-bold text-gray-500 ">No data available</h1>
                <p>Please select a Players to continue.</p>
            </div>
        </div>
        
        }
        </div>
        </>
    )
}