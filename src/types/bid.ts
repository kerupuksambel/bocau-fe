export interface Bid {
    address: string,
    // auction: 
    wei: number | bigint,
    auction: Auction | null
}

export interface Auction {
    id: string,
    ownerAddress: string,
    name: string,
    type: string,
    wei: number,
    description: string,
    startTime: Date,
    endTime: Date,
}