export interface menu {
    label: string;
    icon: string;
    children?: menu[]
}

const navList: menu[] = [
    {
        label: 'Others',
        icon: '',
        children: [
            {
                label: 'Settings',
                icon: 'pi pi-cog',
            },
            {
                label: 'Support',
                icon: 'pi pi-phone',
            },
        ]
    }
]

export default navList
