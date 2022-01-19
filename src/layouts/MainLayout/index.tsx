import { Outlet } from 'react-router-dom'

import { Player, Sider } from '@bee/components'

export default function MainLayout() {
    return (
        <div className="w-full h-screen overflow-hidden">
            <div className="fixed top-0 bottom-0 w-[260px]">
                <Sider />
            </div>
            <main className="relative ml-[260px] bg-primary-selago h-full">
                <Outlet />
                <div className="absolute w-full xl:w-[calc(100%-320px)] bottom-0 p-5">
                    <Player />
                </div>
            </main>
        </div>
    )
}
