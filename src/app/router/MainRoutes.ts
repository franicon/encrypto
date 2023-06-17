const MainRoutes = {
    path: '/',
    meta: {
        requiresAuth: true
    },
    redirect: '/dashboard',
    component: () => import('@/app/layouts/MainLayouts.vue'),
    children: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('@/app/views/pages/main/Dashboard.vue'),
        },
        {
            path: '/actions',
            name: 'action',
            component: () => import('@/app/views/pages/main/Action.vue'),
        },
        {
            path: '/wallet',
            name: 'wallet',
            component: () => import('@/app/views/pages/main/Wallet.vue'),
        },
        {
            path: '/trade',
            name: 'trade',
            component: () => import('@/app/views/pages/main/Trade.vue'),
        },
        {
            path: '/nft',
            name: 'nft',
            component: () => import('@/app/views/pages/main/Nft.vue'),
        },
        {
            path: '/pricing',
            name: 'live pricing',
            component: () => import('@/app/views/pages/main/Pricing.vue'),
        },
    ]
}

export default MainRoutes;

