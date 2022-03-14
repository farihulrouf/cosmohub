const CardProduct = (props) => {
    const {item} = props

    return (
        <div className={`sm:max-w-[420px] min-h-[567px] ${item.id <=3  ? 'bg-[#CBD9FD]' : item.id >3  && item.id <=6 ? 'bg-[#B9B1EC]' : 'bg-[#6EDAE9]'} p-4 rounded-lg font-palo`}>
            <div className="flex flex-col items-center justify-center gap-y-4">
                <div>
                    <h3 className="text-xl text-center font-semibold">{item.title}</h3>
                    <p className="text-center">{item.desc}</p>
                </div>
                <div className="py-6">
                    {item.detail.map((detail, index) => (
                        <div key={index} className="flex space-x-2 py-1 items-center">
                            <img className="w-4 h-auto" src="/img/check_list.svg" />
                            <p>{detail.text}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <button className="py-2 px-2 bg-yellow-500 rounded-xl">Choose Plan</button>
                </div>
            </div>
           
        </div>
    )
}

export default CardProduct