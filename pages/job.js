import React from 'react'
import { product } from '../components/data/dataContent'
import CardProduct from '../components/CardProduct'
import BgPages from '../components/BgPages'
const Job = () => {
    const title = "Every Career counts to the cosmos."
    const desc = "Open 24/7, Cosmohub offers flexe necessary amenities for a bmcorper libero orci egestas ut quam. Vitae duis innas pretium cras."
    const products = product.slice(0, 3)
    //console.log(products)
    return (
        <React.Fragment>
        <BgPages
            title={title}
            desc={desc}
        />
        <div className="bg-black">
           
            <div className="max-w-screen-xl mx-auto p-4">
                 <div className="grid grid-cols-12 pt-4 gap-x-4 gap-y-24">
                    <div className="md:col-span-4 col-span-12">
                        <img className="max-w-[365px] h-auto" src="/img/job/job_content1.png" />
                    </div>
                    <div className="md:col-span-8 col-span-12">
                         <h2 className="text-white font-semibold text-4xl md:text-5xl py-2">Every Career to the cosmos</h2>  
                          <p className="text-white max-w-[635px] py-8">Aenean enim, egestas semper lacus gravida. A laoreet tempor senectus id nisi. Etiam pellentesque aliquam aliquam feugiat a, consectetur. Integer aliquet eu, quis orci. Bibendum diam ante etiam porttitor vitae sollicitudin quis viverra est. Orci vestibulum adipiscing ornare in pellentesque.</p>
                    </div>
                    <div className="md:col-span-7 col-span-12">
                         <h2 className="text-white font-semibold text-4xl md:text-5xl py-2">Beautiful Condusive Working environment</h2>  
                         <p className="text-white max-w-[635px] py-8">Aenean enim, egestas semper lacus gravida. A laoreet tempor senectus id nisi. Etiam pellentesque aliquam aliquam feugiat a, consectetur. Integer aliquet eu, quis orci. Bibendum diam ante etiam porttitor vitae sollicitudin quis viverra est. Orci vestibulum adipiscing ornare in pellentesque.</p>
                    </div>

                    <div className="md:col-span-5 col-span-12">
                         <div className="py-1 pl-0 flex gap-2">
                            <div className="max-w-[252px]">
                                 <img className="w-full" src="/img/Img_Rectangle_57.png" alt="pic" />
                            </div>
                            <div className="max-w-[153px]">
                                <img className="w-full" src="/img/Img_Rectangle_56.png" alt="pic" />
                            </div>            
                         </div>
                         <div className="py-1 pl-0 flex gap-2">
                            <div className="max-w-[153px]">
                                 <img className="w-full" src="/img/Img_Rectangle_59.png" alt="pic" />
                            </div>
                            <div className="max-w-[252px]">
                                <img className="w-full" src="/img/Img_Rectangle_58.png" alt="pic" />
                            </div>  
                                     
                        </div>
                    </div>
                 </div>

            </div>
        </div>
        </React.Fragment>
    )
}

export default Job