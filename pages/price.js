import { product } from '../components/data/dataContent'
import CardProduct from '../components/CardProduct'
const Price = () => {
    return (
        <div className="black min-h-screen">
             <div className="max-w-screen-xl mx-auto lg:pl-20 lg:pr-20  pl-4 pr-4 pt-4 pb-4 font-palo pt-36">
                 <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4 sm:gap-y-36">
                     {product.map((item, index) => (
                         <div className="col-span-1">
                             <CardProduct key={index} item={item} />
                         </div>
                     ))}
                 </div>
            </div>
        </div>
    )
}

export default Price