import React from 'react'
import Button from '../Buttons/GreenButton'
import WhiteButton from "../Buttons/WhiteButton";

const Header = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between py-12 lg:py-30 gap-10">

                    <div className="flex flex-col gap-5 max-w-2xl text-center lg:text-left">

                        <h1 className='font-medium text-3xl md:text-4xl lg:text-6xl tracking-[1px] md:tracking-[2px] leading-snug md:leading-[4rem]'>
                            Build products <br />that move money
                        </h1>

                        <p className='text-base md:text-lg lg:text-xl text-[#353532] leading-relaxed mt-2 md:mt-4'>
                            Modern Treasury’s payment operations platform and flexible <br className="hidden md:block" />
                            APIs enable you to add money movement and tracking to your <br className="hidden md:block" />
                            products without the heavy lifting.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-5 mt-3 md:mt-5">

                            <button className='bg-[#00835A] px-4 py-2 sm:px-5 sm:py-3 flex items-center justify-center gap-3 rounded-2xl cursor-pointer w-full sm:w-auto'>
                                <p className='text-white text-sm sm:text-base md:text-lg'>Talk to a Payments Advisor</p>
                                <img src="/icons/Frame.png" alt="arrow" className="" />
                            </button>

                            <WhiteButton value="Start building" />

                        </div>

                    </div>

                    <div className="flex flex-col items-center gap-2 w-full lg:w-auto">
                        <img src="/imgs/headerImg.png" alt="Header" className="w-full max-w-sm md:max-w-md lg:max-w-lg" />
                        <p className='text-[#353532] text-center lg:text-left text-sm md:text-base'>
                            Modernize your company’s money movement
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header
