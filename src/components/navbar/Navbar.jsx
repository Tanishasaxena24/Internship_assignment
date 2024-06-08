import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <header className="sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="./logo.png"
                            className="mr-2 h-8"
                            alt="Logo"
                        />
                        <h2 className='text-2xl font-bold'>Uifry</h2>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        
                        <Link
                            to="/getstarted"
                            className="text-white bg-black hover:bg-red-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-1 focus:outline-none"
                        >
                           Download
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block font-semibold py-2 pr-4  duration-200 ${isActive ? "text-red-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/aboutus"
                                    className={({isActive}) =>
                                        `block font-semibold py-2 pr-4 pl-3 duration-200 ${isActive ? "text-red-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/pricing"
                                    className={({isActive}) =>
                                        `block font-semibold py-2 pr-4 pl-3 duration-200 ${isActive ? "text-red-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Pricing
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/features"
                                    className={({isActive}) =>
                                        `block font-semibold py-2 pr-4 pl-3 duration-200 ${isActive ? "text-red-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Features
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
  )
}

export default Navbar
