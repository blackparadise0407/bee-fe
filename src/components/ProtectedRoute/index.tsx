import { Fragment, ReactNode } from 'react'

type ProtectedRouteProps = {
    roles?: TRoles[]
    children?: ReactNode
}

export default function ProtectedRoute({
    roles = [],
    children,
}: ProtectedRouteProps) {
    if (roles.indexOf('user') !== -1) return <div>Opps</div>
    return <Fragment>{children}</Fragment>
}
