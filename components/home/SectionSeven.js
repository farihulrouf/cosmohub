
const SectionSeven = () => {
    return (
        <div className="bg-black">
             <div className="max-w-screen-xl mx-auto pb-4 pt-16">
                {/* <img className="w-36 absolute top-0" src="/img/bg_section_seven.svg" /> */}
                 <div className="grid grid-cols-2">
                    <div className="col-span-1">
                         <h5 className="text-teal-300 text-xl py-2">Become a member</h5>
                         <h2 className="text-white text-5xl py-2">Ready to try different work environment now?</h2> 
                         <p className="text-white max-w-lg py-8 text-base">With its unique concept, 
                         Cosmohub wants to promote productivity, entrepreneurship and business culture by creating a new kind of space, 
                         where people can work, meet, learn or just hang out. So,  
                         whether you are just starting out or looking an inspiring place to be - Cosmohub has got you covered.</p>
                         <div className="py-4 space-x-2">
                            <button className="px-3 py-2 bg-[#FFBE0B] rounded-3xl">Sign Up Now</button>
                            <button className="px-3 py-2 text-white rounded-3xl">Schedule Visit</button>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="max-w-[440px] border-[1px] border-indigo-400 rounded-t-full">
                            <img className="w-full h-auto rounded-t-full" src="/img/image_53.png" alt="pic" />
                        </div>
                    </div>
                 </div>
                
             </div>
        </div>
    )
}
export default SectionSeven