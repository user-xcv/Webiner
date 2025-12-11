import React from 'react'
import Cases from '../others/Cases'

const CaseUnit = () => {
    return (
        <>
            <div className="py-12 md:py-20 lg:py-28">
                <div className="container mx-auto px-4">

                    <h1 className="text-[#353532] text-2xl md:text-3xl lg:text-4xl text-center font-semibold">
                        Use Cases
                    </h1>

                    <p className="text-base md:text-lg lg:text-2xl text-[#353532B2] text-center mt-3 md:mt-5">
                        Use our flexible, scalable platform to move and track money however your product needs.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 mt-8 md:mt-20">
                        
                        <Cases
                            img="\icons\Frame (1).png"
                            title="Automatic Payouts"
                            information={
                                <>
                                    Automate payouts and <br className="hidden md:block" /> reconciliation at scale for <br className="hidden md:block" /> multiple payment methods  <br className="hidden md:block" /> through a single API.
                                </>
                            }
                        />
                        <Cases
                            img="\icons\Frame (2).png"
                            title="Incoming Payments"
                            information={
                                <>
                                    Streamline receiving and <br className="hidden md:block" /> reconciling incoming <br className="hidden md:block" /> payments with Virtual <br className="hidden md:block" /> Accounts, automated <br className="hidden md:block" /> notifications and reporting.
                                </>
                            }
                        />
                        <Cases
                            img="\icons\Frame (3).png"
                            title="Direct Debits"
                            information={
                                <>
                                    Manage direct debits at <br className="hidden md:block" /> scale with bank account <br className="hidden md:block" /> verification, NSF checks <br className="hidden md:block" /> and real-time payment <br className="hidden md:block" /> statuses.
                                </>
                            }
                        />
                        <Cases
                            img="\icons\Frame (4).png"
                            title="Cash Management"
                            information={
                                <>
                                    Simplify funds segregation <br className="hidden md:block" /> and custody, and initiate <br className="hidden md:block" /> book transfers across <br className="hidden md:block" /> multiple bank accounts.
                                </>
                            }
                        />
                        <Cases
                            img="\icons\Frame (5).png"
                            title="Digital Wallets"
                            information={
                                <>
                                    Create a digital wallet <br className="hidden md:block" /> experience from scratch — <br className="hidden md:block" /> issue account numbers, <br className="hidden md:block" /> track balances, and initiate <br className="hidden md:block" /> and receive payments.
                                </>
                            }
                        />
                        <Cases
                            img="\icons\Frame (6).png"
                            title="Investing Operations"
                            information={
                                <>
                                    Fund investment accounts, <br className="hidden md:block" /> track assets, and manage <br className="hidden md:block" /> withdrawals with APIs and <br className="hidden md:block" /> software.
                                </>
                            }
                        />
                        <Cases
                            img="\icons\Frame (7).png"
                            title="Loan Servicing"
                            information={
                                <>
                                    Automate disbursals, track <br className="hidden md:block" /> loan balances and instantly <br className="hidden md:block" /> reconcile loan repayments <br className="hidden md:block" /> to scale lending operations.
                                </>
                            }
                        />
                        <Cases
                            img="\icons\Frame (8).png"
                            title="Fiat On-Ramp"
                            information={
                                <>
                                    Convert fiat to crypto in <br className="hidden md:block" /> your app with APIs for ACH <br className="hidden md:block" /> debits, withdrawals and <br className="hidden md:block" /> incoming wire <br className="hidden md:block" /> reconciliation.
                                </>
                            }
                        />

                    </div>
                </div>
            </div>
        </>
    )
}

export default CaseUnit
