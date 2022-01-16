import { RouteObject } from 'react-router-dom'

import { ProtectedRoute } from '@/components'

import HomePage from './Home'
import MainLayout from '@/layouts/MainLayout'

export const HomeRoutes: RouteObject = {
    path: '/',
    element: (
        <ProtectedRoute>
            <MainLayout />
        </ProtectedRoute>
    ),
    children: [{ index: true, element: <HomePage /> }],
}
