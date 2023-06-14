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
            {
                label: 'Notification',
                icon: 'pi pi-bell',
            }
        ]
    }
]

export default navList
