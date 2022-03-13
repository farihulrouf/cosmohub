const CardProduct = (props) => {
    const {item} = props
    return (
        <div className="max-w-[393px] bg-[#CBD9FD] p-4 rounded-lg font-palo">
            <h3 className="text-xl text-center font-semibold">{item.title}</h3>
            <p className="text-center">{item.desc}</p>
            <div className="py-6">
                {item.detail.map((detail, index) => (
                    <div key={index} className="flex space-x-2 items-center">
                        <img className="w-4 h-auto" src="/img/check_list.svg" />
                        <p>{detail.text}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                 <button className="py-2 px-2 bg-yellow-500 rounded-xl">Choose Plan</button>
            </div>
        </div>
    )
}

export default CardProduct