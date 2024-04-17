import { useState } from "react";
import { navLinks } from "../constants";
import { styles } from "../styles";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return(
    <>
    <nav className={`fixed z-[9999] w-full flex ${styles.paddingX} py-6 justify-between items-center navbar font-bold font-poppins shadow-md z-[9999] bg-white`}>
        <div className="font-poppins font-extrabold">
          <h1 className="text-[20px]">Sarah<span className="text-[#3e3eff]">Shop</span></h1>
        </div>
        <ul className="sm:flex justify-end items-center flex-1 hidden">
          {navLinks.map((nav,index) => (
            <li key={nav.id} className={`font-normal cursor-pointer text-[15px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} hover:underline`}>
             <a href={`#${nav.name}`}>{nav.name}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img 
              src={ toggle ? './images/close.png' : './images/menu.png'} 
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle((prev) => !prev)}
             />
              
             <div
             className={`${toggle ? 'flex' : 'hidden'} p-6 px-16 bg-white fixed top-20 right-0 h-full min-w-[150px]shadow-lg duration-150 transition-all`}
             >
               <ul className="flex items-center flex-1 flex-col">
                {navLinks.map((nav,index) => (
                <li key={nav.id} className={`font-normal cursor-pointer text-[15px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} hover:underline`}>
                <a href={`#${nav.name}`}>{nav.name}</a>
                </li>
                 ))}
              </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar;