
import Button from '../Button'
const SectionSeven = () => {
    return (
        <div className="bg-black">
             <div className="max-w-screen-xl mx-auto p-4 mt-16 mb-8 font-palo">
                {/* <img className="w-36 absolute top-0" src="/img/bg_section_seven.svg" /> */}
                 <div className="grid grid-cols-12">
                    <div className="md:col-span-6 col-span-12">
                         <h5 className="text-teal-300 text-xl py-2">BECOME A MEMBER</h5>
                         <h2 className="text-white text-4xl md:text-5xl py-2 font-semibold">Ready to try different work environment now?</h2> 
                         <p className="text-white max-w-lg py-8 text-base">With its unique concept, 
                         Cosmohub wants to promote productivity, entrepreneurship and business culture by creating a new kind of space, 
                         where people can work, meet, learn or just hang out. So,  
                         whether you are just starting out or looking an inspiring place to be - Cosmohub has got you covered.</p>
                         <div className="py-4 space-x-2">
                            <Button>Sign Up Now</Button>
                            <button className="px-6 py-4 sm:text-base text-sm text-yellow-500 border-[1px] border-yellow-500 rounded-3xl">Schedule Visit</button>
                        </div>
                    </div>
                    <div className="md:col-span-6 col-span-12">
                        <div className="md:max-w-[440px] md:mt-0 mt-4 w-full border-[1px] border-indigo-400 rounded-t-full">
                            <img className="w-full h-auto rounded-t-full" src="/img/image_53.png" alt="pic" />
                        </div>
                    </div>
                 </div>
                
             </div>
        </div>
    )
}
export default SectionSeven