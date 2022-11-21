import React,{useState} from 'react'
import '../index.css'

const Header= () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div> 
      <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                          <img src="img/logo.svg"></img>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                  {/* self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md */}
                        <ul className="absolute bg-white sm:w-auto sm:self-center left-6 right-6 flex-col items-center justify-center  self-end py-8  space-y-6 md:flex md:space-x-2 md:space-y-0">
                            <li className="text-gray-600 hover:text-blue-600">
                            <a href="#" class="hover:text-darkGrayishBlue">Pricing</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                            <a href="#" class="hover:text-darkGrayishBlue">Product</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                            <a href="#" class="hover:text-darkGrayishBlue">About Us</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                            <a href="#" class="hover:text-darkGrayishBlue">Careers</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                            <a href="#" class="hover:text-darkGrayishBlue">Careers</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
  {/* <nav className="relative container mx-auto p-6">
    
      <div className="flex items-center justify-between">
        
        <div className="pt-2">
          <img src="img/logo.svg" alt="" />
        </div>
     
        <div className="hidden space-x-6 md:flex">
          <a href="#" className="hover:text-darkGrayishBlue">Pricing</a>
          <a href="#" className="hover:text-darkGrayishBlue">Product</a>
          <a href="#" className="hover:text-darkGrayishBlue">About Us</a>
          <a href="#" className="hover:text-darkGrayishBlue">Careers</a>
          <a href="#" className="hover:text-darkGrayishBlue">Community</a>
        </div>
      
        <a
          href="#"
          className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">Get Started</a>

       
        <button
          id="menu-btn"
          className="block hamburger "
          onClick={() => setNavbar(!navbar)}
        >
          
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

    
      <div className="md:hidden">
        <div
          id="menu"
          className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
      </div>
    </nav> */}

    </div>
  )
}

export default Header;