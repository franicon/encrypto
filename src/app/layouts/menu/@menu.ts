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
                label: 'Trade',
                icon: 'pi pi-dollar',
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
            },
            {
                label: 'Settings',
                icon: 'pi pi-cog',
                to: '/'
            },
            {
                label: 'Support',
                icon: 'pi pi-phone',
                to: '/actions'
            },

        ]
    },
]

export default navList
