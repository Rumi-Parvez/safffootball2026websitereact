
import footerlogo from "../assets/proxsylogo.png.png"
export function Footer() {
    
    return (
        <>
        <div>

        <div className="bg-blue-200 text-blue-900 mt-10 flex justify-between items-center gap-2 ">
            <div className="pb-10 pt-5 pr-10 pl-5">
                <img className="h-30 pt-5 px-4  " src={footerlogo} alt="" />
            </div>
            <div>
                <ul className="font-bold list list-item">
                   <li><a href="">Home</a></li>
                        <li><a href="">Players</a></li>
                        <li><a href="">Tournament</a></li>
                        <li><a href="">Gellry</a></li>
                        <li><a href="">Book</a></li>
                </ul>
            </div>
            <div>
                <ul className="font-bold list list-item">
                        <li><a href="">Gellry</a></li>
                        <li><a href="">Players</a></li>
                   <li><a href="">Home</a></li>
                        <li><a href="">Book</a></li>
                        <li><a href="">Tournament</a></li>
                </ul>
            </div>
            <div className="pr-10">
                <ul className="font-bold list list-item">
                        <li><a href="">Tournament</a></li>
                   <li><a href="">Home</a></li>
                        <li><a href="">Players</a></li>
                        <li><a href="">Book</a></li>
                        <li><a href="">Gellry</a></li>
                </ul>
            </div>
        </div>

        </div>
        </>
    )
}