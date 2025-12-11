import React from 'react'

const Product = () => {
    return (
        <>
            <div className="bg-[#004D42] py-15">
                <div className="container mx-auto px-4">
                    
                    <div className="flex flex-col items-center gap-5 pt-15 text-center">
                        
                        <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#F7F7F3] font-semibold">
                            Our Products
                        </h2>

                        <p className="text-base md:text-lg lg:text-xl text-[#EDF1F1B2] leading-relaxed max-w-4xl mx-auto">
                            There's a lot more to money movement than just moving money. 
                            Our APIs automate money movement at scale, including bank 
                            integration, payments, and reconciliation, while the web app 
                            provides complete control over fund flows with approval workflows, 
                            notifications, reporting, and more.
                        </p>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Product
