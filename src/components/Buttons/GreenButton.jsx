import React from 'react'

const Button = (props) => {
    return (
        <>
            <button
                className={`
                    ${props.color}
                    ${props.textColor}
                    flex items-center justify-center gap-3
                    px-3 py-2
                    sm:px-4  sm:py-2
                    md:px-5 md:py-2
                    rounded-2xl cursor-pointer
                    transition
                    hover:bg-white hover:text-black
                `}
            >
                <span className="text-sm sm:text-base md:text-lg">
                    {props.value}
                </span>

                <img
                    src="/icons/Frame.png"
                    alt=""

                />
            </button>
        </>
    )
}

export default Button
