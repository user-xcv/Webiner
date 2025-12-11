import React, { useState } from 'react'
import Button from '../Buttons/GreenButton'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [stateNavbar, setNavbar] = useState(true)
    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <>
            {stateNavbar && (
                <nav className="py-2 bg-[#F7F7F3]">
                    <div className="container mx-auto px-4">
                        <div className="flex md:flex-row items-center justify-between gap-4 md:gap-0">
                            <div className="flex items-center gap-3  md:flex-row items-center gap-2 md:gap-4">
                                <div className="bg-[#D9D9D3] w-24 md:w-32 uppercase p-1 text-xs text-center">Webiner</div>
                                <p className="text-xs md:text-base font-regular">
                                    Watch Goldman Sachs, Nacha, and Modern Treasury discuss the future of embedded payments.
                                </p>
                                <div className="flex items-center text-xs md:text-base text-[#00835A] cursor-pointer">
                                    <p>Watch the webinar.</p>
                                    <img src="/icons/Frame.png" alt="icon" className='pr-10' />
                                </div>
                            </div>
                            <img
                                className="cursor-pointer"
                                onClick={() => setNavbar(false)}
                                src="/icons/close rek.png"
                                alt="close"
                            />
                        </div>
                    </div>
                </nav>
            )}

            <div className="sticky top-0 bg-white shadow-sm z-50">
                <div className="container mx-auto px-4">
                    <nav className="flex   flex-col justify-between py-4 md:py-5 md:flex-row">

                        <div className="flex items-center justify-between w-full md:w-auto">

                            <div className="md:hidden">
                                <button onClick={() => setMobileMenu(!mobileMenu)}>
                                    {mobileMenu ? <X size={30} /> : <Menu size={20} />}
                                </button>
                            </div>
                        </div>

                        <div className={`flex items-center gap-10  md:flex-row items-start md:items-center w-full md:w-auto gap-4 md:gap-10 mt-4 md:mt-0 ${mobileMenu ? 'flex items-center' : 'hidden md:flex'}`}>
                            <Link to="" className="text-[#353532] text-base md:text-lg font-regular  hover:scale-110 transition">Home</Link>
                            <a href="#" className="text-[#353532] text-base md:text-lg font-regular  hover:scale-110 transition">Platform</a>
                            <a href="#" className="text-[#353532] text-base md:text-lg font-regular  hover:scale-110 transition">Solutions</a>
                            <a href="#" className="text-[#353532] text-base md:text-lg font-regular  hover:scale-110 transition">Resources</a>
                            <a href="#" className="text-[#353532] text-base md:text-lg font-regular  hover:scale-110 transition">Pricing</a>
                        </div>

                        <div className={`flex items-center gap-10 md:flex-row items-start md:items-center gap-4 md:gap-5 mt-4 md:mt-0 ${mobileMenu ? 'flex' : 'hidden md:flex'}`}>
                            <Link to="/login" className="text-[#353532] items-center  pt-2 md:text-lg font-regular">Log in</Link>
                            <Button value="Sign up" color="bg-[#00835A]" textColor="text-white" />
                            <img src="/icons/searchIcon.png" alt="search" className='pt-2 lg:pt-0' />
                        </div>

                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar
