import { Outlet } from 'react-router-dom'

import { Sider } from '@/components'

export default function MainLayout() {
    return (
        <div className="w-full h-screen overflow-hidden">
            <div className="fixed top-0 bottom-0 w-[260px]">
                <Sider />
            </div>
            <main className="ml-[260px] bg-primary-selago h-full">
                <Outlet />
            </main>
        </div>
    )
}
