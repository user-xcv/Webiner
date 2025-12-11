import React, { useState } from 'react'
import WhiteButton from '../Buttons/WhiteButton'
import { CodeXml } from 'lucide-react'

const DevoloperSection = () => {
    const textBox = `
curl  --request   POST\
-u
ORGANIZATION_ID:API_KEY \
--url
https://app.moderntreasury.com/api/counterparties \
-H
'Content-Type: application/json'
\
-d
'{
"name": "Kenner, Bach & Ledeen",
"accounts": [{
"account_type": "checking",
"routing_details": [{
"routing_number_type": "aba",
"routing_number": "026009593"
}],
"account_details": [{
"account_number": "123456789"
}]
}]
}' `

    function copy() {
        navigator.clipboard.writeText(textBox)
    }

    return (
        <>
            <section className="bg-[#1F2334] py-20 md:py-30">
                <div className="container mx-auto px-4">

                    <div className="flex flex-col items-center gap-5 text-center">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-400 text-[#F7F7F3]">
                            Made for developers
                        </h1>

                        <p className="text-[#EDF1F1B2] text-base md:text-lg leading-relaxed">
                            Integrate Modern Treasury with REST APIs and webhooks. Our platform abstracts the <br className="hidden md:block" />
                            complexity of bank integration, payment initiation and reconciliation, and balance tracking so <br className="hidden md:block" />
                            that you can focus on your product.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between items-start mt-12 gap-10">

                        <div className="flex flex-col gap-10 w-full lg:w-1/2">
                            <p className="text-lg md:text-xl text-[#F7F7F3]">With our APIs you can:</p>

                            <ul className="flex flex-col rounded-xl">
                                {[
                                    "Onboard and verify counterparties.",
                                    "Make and receive payments.",
                                    "Monitor payment status in real time.",
                                    "Check bank account balances.",
                                    "Create and manage virtual accounts.",
                                    "Add ledger functionality with double-entry bookkeeping."
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center border border-[#F7F7F31A] gap-3 p-4 rounded-md"
                                    >
                                        <input type="radio" />
                                        <label className="text-[#F7F7F3B2]">{item}</label>
                                    </li>
                                ))}
                            </ul>

                            <WhiteButton value="Explore the docs" textColor="text-[#AEDEF3]" />
                        </div>

                        <div className="bg-[#FFFFFF0F] w-full lg:w-auto rounded-lg overflow-hidden">
                            <div className="w-full lg:w-140 px-6 md:px-10 py-5">

                                <div className="flex justify-between items-center border-b border-[#FFFFFF0F] pb-2 mb-3">
                                    <p className="text-[#F7F7F380]">cURL</p>
                                    <CodeXml
                                        onClick={copy}
                                        className="transition hover:text-red-500 cursor-pointer"
                                    />
                                </div>

                                <pre className="text-[#79D0EEE5] text-sm md:text-base overflow-x-auto whitespace-pre-wrap">
                                    {textBox}
                                </pre>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-[#1F2334] py-20">
                <div className="container mx-auto px-4 text-center flex flex-col gap-6 items-center">

                    <p className="text-2xl md:text-3xl lg:text-4xl text-[#F7F7F3]">
                        All your bank accounts in one place
                    </p>

                    <p className="text-[#EDF1F1B2] text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl">
                        Our partnerships with leading commercial banks enable us to integrate directly with their <br className="hidden md:block" />
                        core systems, helping you manage access to bank accounts, payments, transactions, cash <br className="hidden md:block" />
                        balances and more through a single portal and API.
                    </p>

                    <WhiteButton
                        value="Learn more about our bank integrations"
                        textColor="text-[#AEDEF3]"
                    />

                    <img
                        src="./imgs/IMAGE (29).png"
                        alt="bank integrations"
                        className="w-full max-w-4xl mt-6"
                    />

                </div>
            </section>
        </>
    )
}

export default DevoloperSection
