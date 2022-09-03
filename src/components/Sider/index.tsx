import clsx from 'clsx'
import { Fragment } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
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
import { RiCompassFill, RiCompassLine, RiMenuFoldLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

import { avatarPlaceholder } from '@bee/assets/images'

import { FlexGrow } from '..'
import { SiderItem, SiderItemProps } from './SiderItem'

export interface HandleCollapseFn {
    (collapsed: boolean): void
}
interface SiderProps {
    collapsed: boolean
    onCollapsed: HandleCollapseFn
}

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

export default function Sider({ collapsed, onCollapsed }: SiderProps) {
    return (
        <aside className="relative w-full h-screen bg-white">
            <div
                className={clsx(
                    collapsed
                        ? 'relative p-3 grid place-content-center'
                        : 'absolute top-3 right-3',
                )}
            >
                <RiMenuFoldLine
                    className="text-gray-500 text-xl cursor-pointer"
                    onClick={() => onCollapsed(!collapsed)}
                />
            </div>
            {!collapsed && (
                <div className="py-4 px-7 text-lg font-bold">
                    <Link to="/">
                        <span className="text-yellow-400">Bee</span>
                        <span>Music</span>
                    </Link>
                </div>
            )}
            {siderGroups.map(({ title, items }, idx) => (
                <Fragment key={idx}>
                    {title && (
                        <span
                            className={clsx(
                                'py-1 text-gray-400 capitalize',
                                collapsed
                                    ? 'block pl-1 text-xs text-center'
                                    : 'pl-10 text-sm',
                            )}
                        >
                            {title}
                        </span>
                    )}
                    {items.map(({ path, ...restProps }) => (
                        <SiderItem
                            key={path}
                            path={path}
                            collapsed={collapsed}
                            {...restProps}
                        />
                    ))}
                </Fragment>
            ))}
            <div
                className={clsx(
                    'absolute left-0 right-0 bottom-0 h-[80px] flex items-center bg-white border-t border-gray-200',
                    collapsed ? 'px-0 w-full justify-center' : 'px-10',
                )}
            >
                {!collapsed && (
                    <>
                        <img
                            className="w-9 h-9 rounded-full"
                            src={avatarPlaceholder}
                            alt="user avatar"
                        />
                        <span className="ml-4 text-sm font-bold">
                            Kyle Pham
                        </span>
                        <FlexGrow />
                    </>
                )}
                <div className="p-2 cursor-pointer hover:bg-primary-selago rounded-md transition-colors">
                    <BiLogOut className="text-gray-500 text-xl" />
                </div>
            </div>
        </aside>
    )
}
