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
                label: 'Transactions',
                icon: 'pi pi-arrow-right-arrow-left',
                to: '/trade'
            },
            {
                label: 'Wallet',
                icon: 'pi pi-wallet',
                to: '/wallet'
            },
            {
                label: 'Live Pricing',
                icon: 'pi pi-chart-bar',
                to: '/pricing'
            },
            {
                label: 'Action',
                icon: 'pi pi-sliders-h',
                to: '/actions'
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
