import React from 'react';
import Button from '../Buttons/GreenButton';
import WhiteButton from '../Buttons/WhiteButton';
const PaymentUnits = () => {
    return (
        <section className="bg-white py-20 relative overflow-hidden">
            <img
                src="./imgs/Frame (9).png"
                alt=""
                className="hidden sm:absolute left-0 bottom-0 "
            />

            <img
                src="./imgs/Frame (10).png"
                alt=""
                className=" hidden sm:absolute right-0 bottom-0"
            />

            <div className="container mx-auto text-center relative z-10">
                <p className="text-3xl font-medium mb-6" >
                    Try Modern Treasury and see how smooth payment operations can be.
                </p>

                <div className="flex justify-center gap-6">
                    <Button value='Talk to a Payments Advisor' color='bg-[#00835A]' textColor='text-white' />
                    <WhiteButton value='Sign up' textColor='text-[#00835A]' font='text-xl' />

                </div>
            </div>
        </section>
    );
};

export default PaymentUnits;
