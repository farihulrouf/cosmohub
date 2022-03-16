const CardJob = (props) => {
    const {item} = props

    return (
        <div className="sm:max-w-[331px] min-h-[453px] bg-[#826AB7] font-palo rounded-xl">
            <div className="flex flex-col gap-y-8 p-3">
               <p className="text-teal-500 uppercase">{item.category}</p>
               <h3 className="text-white text-3xl max-w-[150px]">{item.title}</h3>
               <p className="text-white text-lg max-w-[270px]">{item.desc}</p>
               <div className="flex justify-between">
                   {item.sub.map((sub, index) => (
                       <p key={index} className="text-white text-base">{sub.text} </p>
                   ))}
                </div>
                <div className="flex justify-center">
                    <button className="px-6 py-3 bg-[#FFBE0B] sm:text-base text-sm rounded-3xl font-semibold">Call to apply</button>
                </div>
            </div>
           
        </div>
    )
}

export default CardJob