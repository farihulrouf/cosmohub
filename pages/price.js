import React from 'react'
import { product } from '../components/data/dataContent'
import CardProduct from '../components/CardProduct'
import BgPages from '../components/BgPages'
const Price = () => {
    const title = "Pricing to fit your needs."
    const desc = "Open 24/7, Cosmohub offers flexe necessary amenities for a"
    const products = product.slice(0, 3)
    //console.log(products)
    return (
        <React.Fragment>
        <BgPages
            title={title}
            desc={desc}
        />
        <div className="bg-black">
           
            <div className="max-w-screen-xl mx-auto relative lg:min-h-[1800px] sm:min-h-[3000px] min-h-[5100px]">
                    <div className="w-full -top-44 absolute p-4">
                        <div className="grid grid-cols-12 gap-x-4 sm:gap-y-16 gap-4">
                           {product.map((item, index) => ( 
                                <div key={index} className="lg:col-span-4 sm:col-span-6 col-span-12">
                                    <CardProduct  item={item} />
                                </div>
                            ))}
                         </div>
                    </div>
                    
                </div>
        </div>
        </React.Fragment>
    )
}

export default Price