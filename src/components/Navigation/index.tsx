import { HiArrowRight, HiArrowLeft } from 'react-icons/hi'
import { RiSearch2Line } from 'react-icons/ri'

import { Input } from '..'

// type NavigationProps = {}

export default function Navigation() {
    return (
        <div className="flex items-center">
            <div className="flex space-x-5">
                <HiArrowLeft className="text-xl text-gray-600 hover:text-gray-500 transition-colors cursor-pointer" />
                <HiArrowRight className="text-xl text-gray-600 hover:text-gray-500 transition-colors cursor-pointer" />
            </div>
            <Input
                className="ml-10"
                icon={<RiSearch2Line />}
                fullWidth
                inputProps={{
                    placeholder: 'Search for artist, songs and...',
                }}
            />
        </div>
    )
}
