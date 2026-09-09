
import bff from "../assets/ffteam/bdf.png.webp"
import butanff from "../assets/ffteam/butanf.png.svg"
import indiaff from "../assets/ffteam/indiaf.png.webp"
import maldivff from "../assets/ffteam/maldivf.png.svg"
import nepalff from "../assets/ffteam/nepaf.png.jpg"
import pakistanff from "../assets/ffteam/pakistanf.png.webp"
import srilankaff from "../assets/ffteam/srilankaf.png.webp"


export function Team() {
    
    return (
        <>
        <div>
            <div> 
                <h1 className="flex items-center justify-center  p-5 font-bold text-3xl ]">All the Participants Team</h1>
                <h1 className="flex items-center justify-center  p-5 font-bold text-xl ]">Host</h1>
                <div className="flex justify-center items-center">
                    <img className="h-50 " src={bff} alt="" />
                    
                </div>
                  <br />

                
                <div className="flex justify-center items-center mb-10">
                    <div className="grid grid-cols-3 gap-10 ">
                    <img className="h-50" src={butanff} alt="" />
                    <img className="h-50" src={indiaff} alt="" />
                    <img className="h-50" src={maldivff} alt="" />
                    <img className="h-50" src={nepalff} alt="" />
                    <img className="h-50" src={pakistanff} alt="" />
                    <img className="h-50" src={srilankaff} alt="" />
                </div>
                </div>
            </div>
        </div>
        </>
    )
}