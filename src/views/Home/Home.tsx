import { BiChevronRight } from 'react-icons/bi'

import { banner } from '@bee/assets/images'
import { Navigation } from '@bee/components'

export default function HomePage() {
    return (
        <div className="flex">
            <div className="px-8 py-5 flex-grow">
                <Navigation />
                <div className="flex justify-between items-end mt-5">
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-500">
                            What&apos;s hot 🔥
                        </span>
                        <span className="font-bold text-3xl tracking-wide">
                            Trending
                        </span>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <span className="font-bold text-sm">More</span>
                        <BiChevronRight />
                    </div>
                </div>

                <div
                    className="rounded-xl p-4 mt-5"
                    style={{
                        background: `url(${banner}) center no-repeat`,
                        backgroundSize: 'cover',
                    }}
                >
                    <div className="flex flex-col">
                        <span>Artist</span>
                        <div className="flex flex-col font-bold text-3xl text-white">
                            <span>On Top</span>
                            <span>Of The World</span>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="px-8 py-5 hidden xl:block w-[320px]"></div>
        </div>
    )
}
