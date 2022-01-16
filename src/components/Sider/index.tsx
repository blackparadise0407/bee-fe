import { BiLogOut } from 'react-icons/bi'
import { FlexGrow } from '..'
import SiderItem from './SiderItem'

export default function Sider() {
    return (
        <aside className="w-full h-screen bg-white">
            <SiderItem />
            <div className="absolute left-0 right-0 bottom-0 h-[80px] flex items-center px-10 bg-white border-t border-gray-200">
                <img
                    className="w-9 h-9 rounded-full"
                    src="https://i.pravatar.cc/100"
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
