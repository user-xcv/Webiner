import React from 'react'

const WhiteButton = (props) => {
    return (
        <>
            <button
                className={`
                    flex items-center gap-2 
                    cursor-pointer
                    rounded-2xl
                    px-3 py-2
                   
                    ${props.textColor} ${props.font || 'font-medium'}
                    transition
                    hover:bg-[#2B3733] hover:text-[#B2ECA1]
                `}
            >
                <span className="text-sm sm:text-base md:text">
                    {props.value}
                </span>

                <img
                    src="/icons/Frame.png"
                    alt="icon"
                />
            </button>
        </>
    )
}

export default WhiteButton
