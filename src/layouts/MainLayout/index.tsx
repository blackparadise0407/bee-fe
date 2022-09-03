import clsx from 'clsx'
import { useCallback, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { Player, Sider } from '@bee/components'
import { HandleCollapseFn } from '@bee/components/Sider'

export default function MainLayout() {
    const [collapsed, setCollapsed] = useState(false)

    const handleCollapsed: HandleCollapseFn = useCallback((collapsed) => {
        setCollapsed(collapsed)
    }, [])

    return (
        <div className="w-full h-screen overflow-hidden">
            <div
                className={clsx(
                    'fixed top-0 bottom-0 transition-all z-50',
                    collapsed ? 'w-[75px]' : 'w-[260px]',
                )}
            >
                <Sider collapsed={collapsed} onCollapsed={handleCollapsed} />
            </div>
            <main
                className={clsx(
                    'relative bg-primary-selago h-full transition-all',
                    collapsed ? 'ml-[75px]' : 'ml-[260px]',
                )}
            >
                <Outlet />
                <div className="absolute w-full xl:w-[calc(100%-320px)] bottom-0 p-5">
                    <Player />
                </div>
            </main>
        </div>
    )
}
