import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

type SiderItemProps = {
    icon?: ReactElement
    label: string
    key: string
}

export default function SiderItem({ icon, label, key }: SiderItemProps) {
    return (
        <NavLink className={(isActive) => 'bg-red-600'} to={key}>
            Sider item
        </NavLink>
    )
}
