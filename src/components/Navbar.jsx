import { useState } from "react";
import { navLinks } from "../constants";
import { styles } from "../styles";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className={`fixed z-[9999] w-full flex ${styles.paddingX} py-4 justify-between items-center navbar font-medium lg:backdrop-blur-lg lg:bg-white/80 bg-white border-b border-gray-100 transition-all duration-300`}>
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Sarah
            <span className="text-blue-600 relative">
              Shop
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></div>
            </span>
          </h1>
        </div>

        <ul className="hidden lg:flex items-center space-x-8">
          {navLinks.map((nav) => (
            <li key={nav.id} className="relative group">
              <a 
                href={`#${nav.name}`}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50 relative"
              >
                {nav.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="lg:hidden">
          <button
            onClick={() => setToggle(!toggle)}
            className="relative w-8 h-8 flex flex-col justify-center items-center space-y-1 transition-all duration-300"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${toggle ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${toggle ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${toggle ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        <div className={`lg:hidden fixed inset-0 z-[9998] transition-all duration-300 ${toggle ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setToggle(false)}
          ></div>
          
          <div className={`absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-white shadow-2xl transform transition-transform duration-300 ${toggle ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                <button
                  onClick={() => setToggle(false)}
                  className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 py-6">
                <ul className="space-y-2">
                  {navLinks.map((nav) => (
                    <li key={nav.id}>
                      <a
                        href={`#${nav.name}`}
                        className="flex items-center px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 group"
                        onClick={() => setToggle(false)}
                      >
                        <span className="font-medium">{nav.name}</span>
                        <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 border-t border-gray-100">
                <div className="text-center text-sm text-gray-500">
                  © 2025 SarahShop
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;