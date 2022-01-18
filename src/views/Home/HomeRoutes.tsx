import { RouteObject } from 'react-router-dom'

import { ProtectedRoute } from '@bee/components'

import HomePage from './Home'
import MainLayout from '@bee/layouts/MainLayout'

export const HomeRoutes: RouteObject = {
    path: '/',
    element: (
        <ProtectedRoute>
            <MainLayout />
        </ProtectedRoute>
    ),
    children: [
        { index: true, element: <HomePage /> },
        { path: '/trendings', element: <HomePage /> },
        { path: '/feed', element: <HomePage /> },
    ],
}
