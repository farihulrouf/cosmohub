import { FaFacebookF, FaLinkedinIn, FaTwitter, FaDribbble } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-black bg-cover bg-bottom bg-[url('/img/footer_bg.png')]">
             <div className="max-w-screen-xl mx-auto p-4">
                <div className="pt-16 grid grid-cols-12 gap-4 pb-8">
                    <div className="md:col-span-6 col-span-8">
                        <div className="flex space-x-1">
                             <img className="w-12 h-12" src="/img/logo.svg" alt="logo" />
                             <p className="text-white text-lg">CosmoHub</p>
                        </div>
                        <div className="py-6 max-w-[290px]">
                            <p className="text-white">
                            Earth is the cradle of humanity, but one cannot live in a cradle forever.
                            </p>
                        </div>

                    </div>
                    <div className="md:col-span-3 col-span-4">
                        <h5 className="text-white">Menu</h5>
                        <ul className="py-1">
                        <li className="text-white py-2">Pricing</li>
                        <li className="text-white py-2">Events</li>
                        <li className="text-white py-2">Contact</li>
                        </ul>
                    </div>

                    <div className="md:col-span-3 col-span-12">
                         <h5 className="text-white">Follow us</h5>
                         <div className="py-3 flex space-x-1">
                            <div className="rounded-full h-8 w-8 flex justify-center items-center bg-white">
                                <FaFacebookF className="w-full text-blue-800" />
                            </div>
                            <div className="rounded-full h-8 w-8 flex justify-center items-center bg-white">
                                <FaTwitter className="w-full text-blue-800" />
                            </div>
                            <div className="rounded-full h-8 w-8 flex justify-center items-center bg-white">
                                <FaDribbble className="w-full text-blue-800" />
                            </div>
                            <div className="rounded-full h-8 w-8 flex justify-center items-center bg-white">
                                <FaLinkedinIn className="w-full text-blue-800" />
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer