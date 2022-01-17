import { avatarPlaceholder } from '@/assets/images'
import { Fragment } from 'react'
import { BiLogOut } from 'react-icons/bi'
import {
    HiCalendar,
    HiChartBar,
    HiHome,
    HiOutlineCalendar,
    HiOutlineChartBar,
    HiOutlineHome,
    HiOutlineTicket,
    HiOutlineViewGrid,
    HiTicket,
    HiViewGrid,
    HiOutlineUserGroup,
    HiUserGroup,
    HiOutlineStar,
    HiStar,
} from 'react-icons/hi'
import {
    RiCompassFill,
    RiCompassLine,
    RiMenuFoldLine,
    RiMenuUnfoldLine,
} from 'react-icons/ri'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { FlexGrow } from '..'
import { SiderItem, SiderItemProps } from './SiderItem'
import { Link } from 'react-router-dom'

const siderGroups: Array<{
    title?: string
    items: SiderItemProps[]
}> = [
    {
        items: [
            {
                path: '/',
                outlinedIcon: <HiOutlineHome />,
                filledIcon: <HiHome />,
                label: 'Home',
            },
            {
                path: '/trendings',
                outlinedIcon: <HiOutlineChartBar />,
                filledIcon: <HiChartBar />,
                label: 'Trends',
            },
            {
                path: '/feed',
                outlinedIcon: <RiCompassLine />,
                filledIcon: <RiCompassFill />,
                label: 'Feed',
            },
        ],
    },
    {
        title: 'discover',
        items: [
            {
                path: '/new',
                outlinedIcon: <HiOutlineViewGrid />,
                filledIcon: <HiViewGrid />,
                label: 'New and Notable',
            },
            {
                path: '/release',
                outlinedIcon: <HiOutlineCalendar />,
                filledIcon: <HiCalendar />,
                label: 'Release Calendar',
            },
            {
                path: '/events',
                outlinedIcon: <HiOutlineTicket />,
                filledIcon: <HiTicket />,
                label: 'Events',
            },
        ],
    },
    {
        title: 'your collections',
        items: [
            {
                path: '/favorites',
                outlinedIcon: <AiOutlineHeart />,
                filledIcon: <AiFillHeart />,
                label: 'Favorite songs',
            },
            {
                path: '/artists',
                outlinedIcon: <HiOutlineUserGroup />,
                filledIcon: <HiUserGroup />,
                label: 'Artist',
            },
            {
                path: '/albums',
                outlinedIcon: <HiOutlineStar />,
                filledIcon: <HiStar />,
                label: 'Albums',
            },
        ],
    },
]

export default function Sider() {
    return (
        <aside className="relative w-full h-screen bg-white">
            <div className="absolute top-3 right-3">
                <RiMenuFoldLine className="text-gray-500 text-xl cursor-pointer" />
            </div>
            <div className="py-4 px-7 text-lg font-bold">
                <Link to="/">
                    <span className="text-yellow-400">Bee</span>
                    <span>Music</span>
                </Link>
            </div>
            {siderGroups.map(({ title, items }, idx) => (
                <Fragment key={idx}>
                    {title && (
                        <span className="pl-10 py-1 text-sm text-gray-400 capitalize">
                            {title}
                        </span>
                    )}
                    {items.map(({ path, ...restProps }) => (
                        <SiderItem key={path} path={path} {...restProps} />
                    ))}
                </Fragment>
            ))}
            <div className="absolute left-0 right-0 bottom-0 h-[80px] flex items-center px-10 bg-white border-t border-gray-200">
                <img
                    className="w-9 h-9 rounded-full"
                    src={avatarPlaceholder}
                    alt="user avatar"
                />
                <span className="ml-4 text-sm font-bold">Kyle Pham</span>
                <FlexGrow />
                <div className="p-2 cursor-pointer hover:bg-primary-selago rounded-md transition-colors">
                    <BiLogOut className="text-gray-500 text-xl" />
                </div>
            </div>
        </aside>
    )
}
