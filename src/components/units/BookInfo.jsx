import React from 'react'
import GreenButton from '../Buttons/GreenButton'
import WhiteButton from '../Buttons/WhiteButton'

const BookInfo = () => {
    return (
        <>
            <div className="py-15 bg-[#2B3733]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col-reverse lg:flex-row justify-between items-center text-white gap-10 lg:gap-0">

                        <div className="flex flex-col gap-2 text-center lg:text-left">
                            <p className='text-[#B2ECA1] uppercase font-regular'>
                                The State of Payment Operations
                            </p>

                            <h2 className='text-[#F7F7F3] text-2xl md:text-3xl lg:text-4xl font-semibold'>
                                Money’s Next Move
                            </h2>

                            <p className='text-[#EDF1F1B2] mt-4 leading-relaxed'>
                                It’s 2022, and financial services are at an inflection point. It’s <br className="hidden md:block" />
                                natural to have questions. We did too. So, Modern Treasury and <br className="hidden md:block" />
                                Harris Poll conducted a survey where financial and product <br className="hidden md:block" />
                                execs revealed the current issues they face while managing <br className="hidden md:block" />
                                payment operations.
                            </p>

                            <div className="flex items-center justify-center lg:justify-start gap-5 mt-5">
                                <GreenButton
                                    value='Download the Report'
                                    color='bg-[#B2ECA1]'
                                    textColor='text-[#004D42]'
                                />
                                <WhiteButton
                                    value='Learn more'
                                    textColor='text-[#B2ECA1]'
                                />
                            </div>
                        </div>

                        <div className="">
                            <img
                                src="/imgs/BookInfo.img.png"
                                alt="Book"
                                className="w-full max-w-xs md:max-w-sm lg:max-w-md object-contain"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default BookInfo
