import { RouteObject } from 'react-router-dom'

import { ProtectedRoute } from '@bee/components'
import MainLayout from '@bee/layouts/MainLayout'

import HomePage from './Home'

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
