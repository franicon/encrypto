export interface menu {
    label: string;
    icon: string;
    to?: string;
    children?: menu[]
}

const navList: menu[] = [
    {
        label: 'mobile',
        icon: '',
        to:'/',
        children: [
            {
                label: 'Dashboard',
                icon: 'pi pi-th-large',
                to: '/dashboard',
            },
            {
                label: 'Buy & Sell',
                icon: 'pi pi-sliders-h',
                to: '/buy-sell'
            },
            {
                label: 'Wallets',
                icon: 'pi pi-wallet',
                to: '/orders'
            },
            {
                label: 'Transactions',
                icon: 'pi pi-arrow-right-arrow-left',
                to: '/transactions'
            },
            {
                label: 'Live Pricing',
                icon: 'pi pi-chart-bar',
                to: '/pricing'
            },

            // {
            //     label: 'NFTs',
            //     icon: 'pi pi-images',
            //     to: '/nft'
            // },
        ]
    },
]

export default navList
