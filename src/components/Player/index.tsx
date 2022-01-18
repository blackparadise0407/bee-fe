import { memo, useEffect, useRef, useState } from 'react'
import {
    HiFastForward,
    HiPause,
    HiPlay,
    HiRewind,
    HiOutlineVolumeOff,
    HiOutlineVolumeUp,
} from 'react-icons/hi'
import { IoShuffleOutline, IoRepeatOutline } from 'react-icons/io5'
import { RiHeart2Line, RiPlayListLine } from 'react-icons/ri'
import { RangeInput } from '..'

export default memo(function Player() {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement>(null)

    const handleTogglePlay = () => {
        setIsPlaying(!isPlaying)
    }

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play()
            } else {
                audioRef.current.pause()
            }
        }
    }, [isPlaying])

    return (
        <div className="h-[120px] w-full bg-white rounded-2xl px-6 py-4 flex flex-col justify-between">
            <div className="flex">
                <div className="flex flex-1 items-center justify-start mr-auto space-x-3 text-lg text-gray-500">
                    <div className="p-2 bg-primary-selago rounded-lg cursor-pointer">
                        <RiHeart2Line />
                    </div>
                    <div className="p-2 bg-primary-selago rounded-lg cursor-pointer">
                        <RiPlayListLine />
                    </div>
                </div>
                <div className="flex flex-1 items-center justify-center text-3xl space-x-4">
                    <IoRepeatOutline className="text-2xl text-gray-500 cursor-pointer" />
                    <HiRewind className="cursor-pointer" />
                    <span
                        className="text-5xl text-yellow-400"
                        onClick={handleTogglePlay}
                    >
                        {isPlaying ? (
                            <HiPause className="cursor-pointer" />
                        ) : (
                            <HiPlay className="cursor-pointer" />
                        )}
                    </span>
                    <HiFastForward className="cursor-pointer" />
                    <IoShuffleOutline className="text-2xl text-gray-500 cursor-pointer" />
                </div>
                <div className="flex flex-1 items-center text-xl text-gray-500 justify-end ml-auto">
                    <HiOutlineVolumeOff />
                    <RangeInput className="w-[90px] mx-3" min={0} max={100} />
                    <HiOutlineVolumeUp />
                </div>
            </div>
            <div className="flex items-center text-sm font-semibold">
                <span>0:00</span>
                <RangeInput className="w-full mx-3" min={0} max={100} />
                <span>3:43</span>
            </div>
        </div>
    )
})
