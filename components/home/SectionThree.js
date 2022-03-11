import { contentSThree, contentSthreeImage } from '../data/dataContent'
const SectionThree = () => {
    return (
        <div className="min-h-[688px] bg-black">
             <div className="max-w-screen-xl mx-auto p-4 pt-20">
                 <div className="flex gap-4">
                     <div className="w-1/2">
                        <div className="max-w-3xl">
                            <h5 className="text-teal-300 text-xl py-2">Visions</h5>
                            <h2 className="text-white text-6xl max-w-[546px] py-2">Our vision in CosmoHub to dream different</h2>
                            <p className="text-white max-w-[616px] py-4 text-lg">
                            Here, you can work, exchange ideas, share experiences and create a strong network of support in order to improve your business, with other likeminded people who share your passion for entrepreneurship and startups.  
                            </p>
                        </div>
                        <div className="max-w-3xl py-4">
                                <div className="flex flex-wrap gap-4 w-full">
                                    {contentSThree.map((item, index) => (
                                        <div key={index} className="flex-auto max-w-[270px]">
                                            <div className="flex space-x-2 items-center py-2">
                                                <img className="w-6 h-auto" src={item.icon} alt="pic" />
                                                <p className="text-white">{item.title}</p>
                                            </div>
                                            <p className="text-white pl-8">{item.desc}</p>
                                        </div>
                                    ))}
                                    
                                </div>
                        </div>
                        <div className="py-6 space-x-2">
                            <button className="px-4 py-3 bg-[#FFBE0B] rounded-3xl">explore more</button>
                        </div>
                     </div>
                     <div className="w-1/2">
                         <div className="flex gap-1 flex-wrap max-w-[600px]">
                             {contentSthreeImage.map((item, index) => (
                                 <div className="max-w-[290px]">
                                    <img className="max-w-[299px] object-cover h-auto" src={item.img} alt="pic" />
                                 </div>
                             ))}
                             
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    )
}
export default SectionThree