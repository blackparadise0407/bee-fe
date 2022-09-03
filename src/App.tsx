import { Fragment } from 'react'
import { useRoutes } from 'react-router-dom'

import { HomeRoutes } from './views/Home'

export default function App() {
    const routes = useRoutes([
        HomeRoutes,
        { path: '*', element: <>Not found</> },
    ])
    return <Fragment>{routes}</Fragment>
}
