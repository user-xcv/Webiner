import React from "react";
import Button from "../Buttons/GreenButton";
const EndFooter = () => {
    return (
        <footer className="bg-[#202424] text-[#8B9292] pt-16 pb-10 px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-12">

                <div className="col-span-2">
                    <h3 className="text-[#BFC5C5] text-lg font-semibold mb-3">
                        Subscribe to journal updates
                    </h3>
                    <p className="mb-4">
                        Discover product features and get primers on the payments industry.
                    </p>
                    <Button value='Subscribe' color='bg-[#00835A]' textColor='text-[#FFFFFF]' />
                </div>

                <div>
                    <h4 className="text-[#BFC5C5] font-semibold mb-3">Products</h4>
                    <ul className="space-y-2">
                        <li>Payments</li>
                        <li>Ledgers</li>
                        <li>Virtual Accounts</li>
                        <li>Compliance</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[#BFC5C5] font-semibold mb-3">Platform</h4>
                    <ul className="space-y-2">
                        <li>Pricing</li>
                        <li>How It Works</li>
                        <li>Why Choose Us</li>
                        <li>Integrations</li>
                        <li>Customers</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[#BFC5C5] font-semibold mb-3">Resources</h4>
                    <ul className="space-y-2">
                        <li>Journal</li>
                        <li>Learn</li>
                        <li>Help</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[#BFC5C5] font-semibold mb-3">Company</h4>
                    <ul className="space-y-2">
                        <li>About</li>
                        <li>Contact</li>
                        <li>Newsroom</li>
                        <li>Careers</li>
                        <li>Security</li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
                <div>
                    <h4 className="text-[#BFC5C5] font-semibold mb-3">Popular guides</h4>
                    <ul className="space-y-2">
                        <li>How Neobanks Can Use Virtual Accounts</li>
                        <li>Which Bank Partner is Best for You?</li>
                        <li>When and How to Set Up an FBO Account</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[#BFC5C5] font-semibold mb-3">Popular integrations</h4>
                    <ul className="space-y-2">
                        <li>Citibank</li>
                        <li>JP Morgan Chase</li>
                        <li>Silicon Valley Bank</li>
                        <li>Wells Fargo</li>
                        <li>NetSuite</li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto border-t border-gray-700 mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center text-sm text-gray-400">

                <div className="flex items-center gap-2 mb-4 lg:mb-0">
                    <img src="./icons/Frame (11).png" alt="" className="pr-10" />
                    <span>Made with</span>
                    <span>🌞</span>
                    <span>in Los Angeles</span>
                </div>

                <div className="flex items-center gap-6 mb-4 lg:mb-0">
                    <span>© Modern Treasury Corp</span>
                    <span>Privacy</span>
                    <span>Terms of Service</span>
                </div>

                <div className="flex items-center gap-5">
                    <img src="./icons/Frame (12).png" alt="" />
                    <img src="./icons/Frame (13).png" alt="" />
                    <img src="./icons/Frame (14).png" alt="" />
                    <img src="./icons/Frame (15).png" alt="" />
                </div>

            </div>
        </footer>
    );
};

export default EndFooter;
