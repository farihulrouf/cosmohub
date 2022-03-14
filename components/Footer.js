const Footer = () => {
    return (
        <footer className="bg-black bg-cover bg-bottom bg-[url('/img/footer_bg.png')]">
             <div className="max-w-screen-xl mx-auto p-4">
                <div className="pt-16 grid grid-cols-3 pb-8">
                    <div className="col-span-1">
                        <div className="flex space-x-1">
                             <img className="w-12 h-12" src="/img/logo.svg" alt="logo" />
                             <p className="text-white text-lg">Cosmohub</p>
                        </div>
                        <div className="py-6 max-w-[290px]">
                            <p className="text-white">
                            Earth is the cradle of humanity, but one cannot live in a cradle forever.
                            </p>
                        </div>

                    </div>
                    <div className="col-span-1">
                        <h5 className="text-white">Menu</h5>
                        <ul className="py-1">
                        <li className="text-white py-2">Pricing</li>
                        <li className="text-white py-2">Events</li>
                        <li className="text-white py-2">Contact</li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                         <h5 className="text-white">Follow us</h5>
                         <div className="py-3 flex space-x-1">
                            <div className="rounded-full h-8 w-8 bg-white">

                            </div>
                            <div className="rounded-full h-8 w-8 bg-white">

                            </div>
                            <div className="rounded-full h-8 w-8 bg-white">

                            </div>
                            <div className="rounded-full h-8 w-8 bg-white">

                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer