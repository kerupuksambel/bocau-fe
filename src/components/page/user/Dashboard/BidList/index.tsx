interface BidListProps {
    name: string,
    type: string,
    price: number,
    time: string
}

const BidList = ({name, type, price, time}: BidListProps) => {
    return (
        <div className="flex items-center justify-between space-x-4">
            <div className="flex flex-nowrap space-x-4 items-center">
                <img src={"https://placehold.co/1920x1080.png?text=35"} className="w-10 h-10 rounded-full"/>
                <div>
                    <p className="text-sm leading-none font-bold">{name}</p>
                    <p className="text-sm text-muted-foreground">{type}</p>
                </div>
            </div>
            <div className="text-right">
                <p className="text-sm leading-none">{price} ETH</p>
                <p className="text-sm text-muted-foreground">ends in {time}</p>
            </div>
        </div>
    )
}

export default BidList