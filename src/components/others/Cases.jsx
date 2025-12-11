import React from 'react'

const Cases = (props) => {
    return (
        <>
            <div className="flex flex-col gap-3 items-center justify-center ">
                <div className='flex items-center' > <img className='border-5 border-double p-2 rounded-full border-[#35353233]' src={props.img} alt="" /></div>
                <h3 className='text-xl text-[#353532] text-center'>{props.title}</h3>
                <p className='text-[#353532B2] text-center '>{props.information}</p>
            </div>
        </>
    )
}

export default Cases
