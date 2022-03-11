import SliderImage from "./SliderImage"
const SectionFour = () => {
    return (
        <div className="bg-black">
             <div className="max-w-screen-xl mx-auto pb-4 pt-4">
                <div className="relative pt-16 flex gap-2">
                    <div className="absolute top-1 left-1/2 pl-12 transform -translate-x-1/2">
                            <img className="max-w-[412px] h-[310px]" src="/img/bg_section4.svg" alt="pic" />
                    </div>
                    <img className="absolute left-[460px] w-12 h-auto" src="/img/rocket.svg" alt="pic" />
                    <div className="w-1/2 flex flex-col justify-center">
                        <div className="max-w-3xl pl-8">
                            <h5 className="text-teal-300 text-xl py-2">Solutions</h5>
                            <h2 className="text-white text-5xl max-w-[546px] py-2">Space to bare your thoughts comfortably</h2>  
                            <p className="text-white max-w-[550px] py-4 text-lg">
                            Open 24/7, Cosmohub offers flexible working space and fully equipped offices with all the necessary amenities for a comfortable and productive work. We give our members access to high-speed internet, a fully equipped kitchen, a business essentials, meeting rooms, conference rooms and business registration options with legal and tax advice.
                            </p> 
                        </div>
                        <div className="py-4 pl-8">
                                <button className="px-3 py-3 bg-[#FFBE0B] rounded-3xl">Apply for membership</button>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="pl-2">
                            <SliderImage />
                        </div>
                    </div>
                </div>
              
             </div>
        </div>
    )
}
export default SectionFour