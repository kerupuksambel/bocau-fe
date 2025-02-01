import { formatRelativeTime } from "@/utils/format"

interface BidListProps {
    name: string,
    type: string,
    price: number,
    endTime: Date
}

const BidList = ({name, type, price, endTime}: BidListProps) => {
    return (
        <div className="flex items-center justify-between space-x-4">
            <div className="flex flex-nowrap space-x-4 items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                    <img src={"https://placehold.co/1920x1080.png?text=300"} alt="Circular Image" className="w-full h-full object-cover" />
                </div>
                <div>
                    <p className="text-sm leading-none font-bold">{name}</p>
                    <p className="text-sm text-muted-foreground">{type}</p>
                </div>
            </div>
            <div className="text-right">
                <p className="text-sm leading-none font-bold">{price} ETH</p>
                <p className="text-[12px] text-muted-foreground">ends {formatRelativeTime((endTime.valueOf() - Date.now()) / 1000)}</p>
            </div>
        </div>
    )
}

export default BidList