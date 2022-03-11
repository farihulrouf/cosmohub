import { contentFiveEvents } from "../data/dataContent"
import ItemFive from "./ItemFive"
const SectionFive = () => {
    return (
        <div className="min-h-[688px] bg-black">
             <div className="max-w-screen-xl mx-auto">
                <div className="pt-16 flex flex-col items-center">
                    <h5 className="text-teal-300 text-center text-xl py-2">Why Choose Us?</h5>
                    <h2 className="text-white text-center max-w-[500px] text-5xl py-2">The benefits that will make you comfort</h2>  
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="flex gap-2 py-8">
                        {contentFiveEvents.map((item, index) => (
                            <ItemFive item={item} key={index} />
                        ))}
                    </div> 
                </div>
              
             </div>
        </div>
    )
}
export default SectionFive