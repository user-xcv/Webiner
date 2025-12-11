import { useState } from 'react'
import Header from './components/topHead/Header'
import WhiteButton from './components/Buttons/WhiteButton'
import BookInfo from './components/units/BookInfo'
import Product from './components/units/Product'
import Greensection from './components/units/Greensection'
import CaseUnit from './components/units/CaseUnit'
import DevoloperSection1 from './components/DevoloperUnits/DevoloperSection'
import PaymentUnits from './components/footerUnits/paymentUnits'
import EndFooter from './components/footerUnits/endFooter'

const MainHome = () => {
    return (
        <>
            <Header />

            <div className=" hidden md:container mx-auto px-4 ">
                <div className="flex justify-center items-center py-20 md:py-40">
                    <div className="flex flex-col gap-6 items-center text-center max-w-3xl">

                        <p className="text-[#353532] text-2xl md:text-3xl lg:text-4xl leading-snug">
                            Over <span className="text-[#00835A]">$5B</span> Reconciled Monthly
                        </p>

                        <p className="text-base md:text-lg lg:text-xl text-[#353532]">
                            Trusted by fast-growing companies in the economy’s most important sectors.
                        </p>

                        <div className="mt-10 md:mt-20">
                            <WhiteButton
                                value="Read customer case studies"
                                textColor="text-[#00835A]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <BookInfo />
            <Product />

            <Greensection
                title="Payments"
                topWord="Move money faster"
                verbalInfo={
                    <>
                        We integrate directly with your bank instead of sitting in the <br className="hidden md:block" />
                        flow of funds, so payments move 2x faster. Set up approval <br className="hidden md:block" />
                        rules and track payments from initiation to reconciliation, with <br className="hidden md:block" />
                        support for ACH, RTP, Wire and global payment methods <br className="hidden md:block" />
                        through a single API and web app.
                    </>
                }
                btnValue="Learn about Payments"
                justify="justify-end"
            />

            <Greensection
                title="Virtual Accounts"
                topWord={
                    <>
                        Reconcile payments <br /> automatically
                    </>
                }
                verbalInfo={
                    <>
                        We automatically reconcile completed payments to <br className="hidden md:block" /> transactions on your bank
                        statement as they are posted and <br className="hidden md:block" /> match returns and reversals to the original
                        payment, <br className="hidden md:block" /> streamlining cash reconciliation. Our Virtual Accounts product <br className="hidden md:block" />
                        makes it easy to create and manage unique sub-accounts <br className="hidden md:block" /> within your bank account
                        to automate attributing incoming <br className="hidden md:block" /> payments.
                    </>
                }
                btnValue="Learn about Virtual Accounts"
                justify="justify-start"
            />

            <Greensection
                title="Ledgers"
                topWord="Track balances in real time"
                verbalInfo={
                    <>
                        We make it easy for products that move money at scale to track <br className="hidden md:block" /> balances in real
                        time with Ledgers, a managed database <br className="hidden md:block" /> optimized for high volume financial
                        transactions that can be <br className="hidden md:block" /> integrated in a few lines of code. Ledgers is
                        immutable, <br className="hidden md:block" /> idempotent, and auditable, providing a reliable source of truth <br className="hidden md:block" />
                        for all transactions taking place in your product.
                    </>
                }
                btnValue="Learn about Ledgers"
                justify="justify-end"
            />

            <div className="container mx-auto px-4">
                <CaseUnit />
            </div>

            <DevoloperSection1 />
            <PaymentUnits />
            <EndFooter />
        </>
    )
}

export default MainHome
