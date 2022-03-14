const CardEvent = (props) => {
    const { item } = props
    return (
        <div className="max-w-365">
            <img className="w-full" src={item.img} alt="pic" />
            <h4 className="text-teal-500 text-base py-1">{item.category}</h4>
            <h4 className="text-white text-base py-1">{item.title}</h4>
            <p className="text-white text-sm">{item.date}</p>
        </div>
    )
}

export default CardEvent