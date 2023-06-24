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
            path: '/buy-sell',
            name: 'buy-sell',
            component: () => import('@/app/views/pages/main/Buy&Sell.vue'),
        },
        {
            path: '/orders',
            name: 'orders',
            component: () => import('@/app/views/pages/main/Orders.vue'),
        },
        {
            path: '/transactions',
            name: 'transactions',
            component: () => import('@/app/views/pages/main/Transactions.vue'),
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

