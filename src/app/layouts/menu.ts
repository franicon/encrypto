export interface menu {
    label: string;
    icon: string;
    to: string;
}

const navList: menu[] = [
    {
        label: 'Dashboard',
        icon: 'pi pi-th-large',
        to: '/dashboard',
    },
    {
        label: 'Trade',
        icon: 'pi pi-chart-line',
        to: '/trade'
    },
    {
        label: 'Wallet',
        icon: 'pi pi-wallet',
        to: '/wallet'
    },
    {
        label: 'Action',
        icon: 'pi pi-sliders-h',
        to: '/actions'
    },
    {
        label: 'Nft',
        icon: 'pi pi-images',
        to: '/nft'
    }
]

export default navList
