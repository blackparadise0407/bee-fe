import { Navigation } from '@bee/components'

export default function HomePage() {
    return (
        <div className="flex">
            <div className="px-8 py-5 flex-grow">
                <Navigation />
            </div>
            <div className="px-8 py-5 hidden xl:block w-[320px]"></div>
        </div>
    )
}
