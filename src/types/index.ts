export type assets = {
    img: string,
    code: string,
    name: string,
    rate: string,
    change: string,
}

export type ownedAssets = {
    img: string,
    code: string,
    name: string,
    asset_value: string,
    fiat_value: string,
}

export type tx = {
    id: string,
    date: string,
    asset: string,
    amt: string,
    status: string,
    tx_type: string
}
