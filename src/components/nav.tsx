import logo from "../assets/saffl Logo.png"
import logotext from "../assets/Saff text logo.png"

export function Nav() {
    
    return (
        <>
        <div>
            <div className="flex justify-between px-0 py-2  items-center container pr-5">
               <div className="flex gap-0 pl-10  ">
                 <img className="h-15 w-15" src={logo} alt="" />
                <img className="w-15" src={logotext} alt="" />
               </div>

                <div>
                    <ul className="flex gap-[30px] justify-center items-cente">
                        <li><a href="">Home</a></li>
                        <li><a href="">Players</a></li>
                        <li><a href="">Tournament</a></li>
                        <li><a href="">Gellry</a></li>
                        <li><a href="">Book</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
        </>
    )
}