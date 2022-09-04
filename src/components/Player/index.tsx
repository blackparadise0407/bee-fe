import { ChangeEvent, memo, useEffect, useRef, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import {
    HiFastForward,
    HiOutlineVolumeOff,
    HiOutlineVolumeUp,
    HiPause,
    HiPlay,
    HiRewind,
} from 'react-icons/hi'
import { IoRepeatOutline, IoShuffleOutline } from 'react-icons/io5'
import { RiHeart2Line, RiPlayListLine } from 'react-icons/ri'

import { fmtMSS } from '@bee/utils/common'

import { RangeInput, WithEffectButton } from '..'

export default memo(function Player() {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement>(null)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [volume, setVolume] = useState(1)
    const [isInterruptDragging, setIsInterruptDragging] = useState(false)
    const [isMuted, setIsMuted] = useState(false)

    useHotkeys('space', () => {
        handleTogglePlay()
    })

    useHotkeys('ctrl+m', () => {
        handleToggleMute()
    })

    const handleToggleMute = () => {
        const current = audioRef.current
        if (current) {
            setIsMuted((isMuted) => {
                isMuted ? (current.volume = volume) : (current.volume = 0)
                return !isMuted
            })
        }
    }

    const handleLoadedMetadata = (e: ChangeEvent<HTMLAudioElement>) => {
        const target = audioRef.current
        setDuration(Math.round(e.target.duration))
        if (target) {
            setVolume((prev) => {
                target.volume = prev
                return prev
            })
            setIsMuted(!target.volume)
        }
    }

    const handleTimeUpdate = (e: ChangeEvent<HTMLAudioElement>) => {
        setCurrentTime(Math.round(e.target.currentTime))
    }

    const handleTogglePlay = () => {
        setIsPlaying((prev) => !prev)
    }

    const handleChangeCurrentTime = (e: ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            if (isPlaying) {
                setIsPlaying(false)
                audioRef.current.pause()
                setIsInterruptDragging(true)
            }
            const value = parseInt(e.target.value)
            audioRef.current.currentTime = value
            setCurrentTime(value)
        }
    }

    const onChangeCurrentTimeEnd = () => {
        if (isInterruptDragging) {
            setIsPlaying(true)
            setIsInterruptDragging(false)
            audioRef.current?.play()
        }
    }

    const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            const value = parseFloat(e.target.value)
            audioRef.current.volume = value
            setVolume(value)
        }
    }

    useEffect(() => {
        if (audioRef.current) {
            const playPromise = audioRef.current.play()
            if (playPromise) {
                playPromise
                    .then((_) => {
                        !isPlaying && audioRef.current?.pause()
                    })
                    .catch((_) => {})
            }
        }
    }, [isPlaying])

    useEffect(() => {
        const curr = audioRef.current
        return () => {
            if (curr) {
                curr.pause()
            }
        }
    }, [])

    return (
        <div className="h-[120px] w-full bg-white rounded-2xl px-6 py-4 flex flex-col justify-between">
            <div className="flex">
                <div className="flex flex-1 items-center justify-start mr-auto space-x-3 text-lg text-gray-500">
                    <WithEffectButton>
                        <div className="p-2 bg-primary-selago rounded-lg cursor-pointer">
                            <RiHeart2Line />
                        </div>
                    </WithEffectButton>
                    <WithEffectButton>
                        <div className="p-2 bg-primary-selago rounded-lg cursor-pointer">
                            <RiPlayListLine />
                        </div>
                    </WithEffectButton>
                </div>
                <div className="flex flex-1 items-center justify-center text-3xl space-x-4">
                    <WithEffectButton>
                        <IoRepeatOutline className="text-2xl text-gray-500 cursor-pointer" />
                    </WithEffectButton>
                    <WithEffectButton>
                        <HiRewind className="cursor-pointer" />
                    </WithEffectButton>
                    <WithEffectButton>
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
                    </WithEffectButton>
                    <WithEffectButton>
                        <HiFastForward className="cursor-pointer" />
                    </WithEffectButton>
                    <WithEffectButton>
                        <IoShuffleOutline className="text-2xl text-gray-500 cursor-pointer" />
                    </WithEffectButton>
                </div>
                <div className="flex flex-1 items-center text-xl text-gray-500 justify-end ml-auto">
                    <WithEffectButton>
                        <span>
                            {isMuted || volume === 0 ? (
                                <HiOutlineVolumeOff
                                    onClick={handleToggleMute}
                                />
                            ) : (
                                <HiOutlineVolumeUp onClick={handleToggleMute} />
                            )}
                        </span>
                    </WithEffectButton>
                    <RangeInput
                        className="w-[90px] mx-3"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        step={0.1}
                        min={0}
                        max={1}
                        tabIndex={-1}
                    />
                </div>
            </div>
            <div className="flex items-center text-sm font-semibold">
                <span>{fmtMSS(currentTime)}</span>
                <RangeInput
                    className="w-full mx-3"
                    value={currentTime}
                    step={1}
                    onChange={handleChangeCurrentTime}
                    onMouseUp={onChangeCurrentTimeEnd}
                    onMouseDown={onChangeCurrentTimeEnd}
                    min={0}
                    max={duration}
                    tabIndex={-1}
                />
                <span>{fmtMSS(duration)}</span>
            </div>
            <audio
                ref={audioRef}
                src="https://mp3-s1-m-zmp3.zmdcdn.me/aa67f5643925d07b8934/8892491565885937214?authen=exp=1662357528~acl=/aa67f5643925d07b8934/*~hmac=f65ba20f0264f591fa69e515464f7fac"
                // eslint-disable-next-line react/no-unknown-property
                onLoadedMetadata={handleLoadedMetadata}
                // eslint-disable-next-line react/no-unknown-property
                onTimeUpdate={handleTimeUpdate}
                // eslint-disable-next-line react/no-unknown-property
                onEnded={() => setIsPlaying(false)}
            />
        </div>
    )
})
