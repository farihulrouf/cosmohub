import CardProduct from './CardProduct'
const BgPages = ({ title, desc}) => {
    //console.log(products)
    return (
        <div className="relative min-h-[800px] bg-cover bg-bottom bg-[url('/img/bg_pages.svg')]">
            
            <div className="max-w-screen-xl h-full mx-auto pb-4 font-palo pt-60">
                <h2 className="text-white text-5xl font-semibold text-center py-2">{title}</h2>
                <p className="text-white py-2 text-base text-center">{desc}</p>
             </div>
            
        </div>
    )
}

export default BgPages