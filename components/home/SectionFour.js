import SliderImage from "./SliderImage"
const SectionFour = () => {
    return (
        <div className="bg-black font-palo">
             <div className="max-w-screen-xl mx-auto sm:pl-0 pl-4 pb-4 pt-4 relative">
                <div className="absolute sm:top-4 top-[340px] sm:left-[480px] left-[180px] ">
                    <img className="sm:w-96 w-28" src="/img/bg_section4.svg" />
                </div>
                 <div className="grid grid-cols-12 sm:pt-16 pt-4">
                     <div className="md:col-span-6 col-span-12">
                            <div className="max-w-3xl sm:pl-8 pl-0 lg:mt-24 mt-2">
                                <h5 className="text-teal-300 text-xl py-2">SOLUTIONS</h5>
                                <h2 className="text-white sm:text-5xl text-4xl max-w-[546px] py-2 font-semibold">Space to bare your thoughts comfortably</h2>  
                                <p className="text-white max-w-[550px] py-4 text-lg">
                                Open 24/7, Cosmohub offers flexible working space and fully equipped offices with all the necessary amenities for a comfortable and productive work. We give our members access to high-speed internet, a fully equipped kitchen, a business essentials, meeting rooms, conference rooms and business registration options with legal and tax advice.
                                </p> 
                            </div>
                            <div className="py-4 sm:pl-8 pl-0">
                                <button className="px-6 py-4 bg-[#FFBE0B] sm:text-base text-sm rounded-3xl font-semibold">Apply for membership</button>
                             </div>
                     </div>  
                     <div className="md:col-span-6 col-span-12">
                             <SliderImage />
                     </div>     
                 </div>
              
             </div>
        </div>
    )
}
export default SectionFour