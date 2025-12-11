import React from 'react'

const Greensection = (props) => {
    return (
        <>
            <div className="py-15 bg-[#004D42]">
                <div className="container mx-auto px-4">

                    <div className={`flex flex-col lg:flex-row ${props.justify} text-white`}>
                        
                        <div className="flex flex-col gap-2 text-center lg:text-left max-w-2xl">
                            
                            <p className="text-[#B2ECA1] uppercase">
                                {props.title}
                            </p>

                            <h2 className="text-[#F7F7F3] text-2xl md:text-3xl lg:text-4xl font-semibold">
                                {props.topWord}
                            </h2>

                            <p className="text-[#EDF1F1B2] mt-4 leading-relaxed">
                                {props.verbalInfo}
                            </p>

                            <div className="flex items-center justify-center lg:justify-start mt-5">
                                <button className="px-4 py-2 flex items-center justify-center gap-3 rounded-2xl bg-[#B2ECA1] text-[#004D42] font-medium">
                                    {props.btnValue}
                                    <img src="/icons/Frame.png" alt="arrow" />
                                </button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Greensection
