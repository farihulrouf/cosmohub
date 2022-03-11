const SectionTwo = () => {
    return (
        <div className="min-h-[688px] bg-black">
             <div className="max-w-screen-xl mx-auto p-4">
                 <div className="flex gap-8">
                     <div className="max-w-[542px]">
                         <img className="p-2 h-[650px] w-[450px] rounded-t-full" src="/img/image_50.png" />
                     </div>
                     <div className="flex-auto">
                        <div className="max-w-3xl pl-8 pt-40">
                            <h5 className="text-teal-300 text-xl py-2">SERVICES</h5>
                            <h2 className="text-white text-6xl max-w-[546px] py-2">Develop and improve your inner energy</h2>
                            <p className="text-white max-w-[616px] py-4 text-lg">Cosmohub is a coworking space in Sarajevo, Bosnia Herzegovina, with an open and creative community of freelancers, remote workers and startups, which provides you with the ideal environment for your business growth. Here, you can work, exchange ideas, share experiences and create a strong network of support in order to improve your business, with other likeminded people who share your passion for entrepreneurship and startups. 
                            </p>
                        </div>
                        <div className="pl-8 py-4 space-x-2">
                            <button className="px-3 py-2 bg-[#FFBE0B] rounded-3xl">view avaibility</button>
                            <button className="px-3 py-2 text-white rounded-3xl">3D tour space</button>
                        </div>
                     </div>
                 </div>
             </div>
        </div>
    )
}
export default SectionTwo