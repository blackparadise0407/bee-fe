import { HTMLProps, useEffect, useRef, useState } from 'react'

import './style.css'

export default function RangeInput({ ...rest }: HTMLProps<HTMLInputElement>) {
    const inputRef = useRef<HTMLInputElement>(null)
    const [progress, setProgress] = useState('')

    const handleInputChange = () => {
        const target = inputRef.current
        if (target) {
            const min = parseInt(target.min)
            const max = parseInt(target.max)
            const val = parseInt(target.value)
            setProgress(((val - min) * 100) / (max - min) + '% 100%')
        }
    }

    useEffect(() => {
        handleInputChange()

        const currentRef = inputRef.current
        currentRef?.addEventListener('input', handleInputChange)
        return () => {
            currentRef?.removeEventListener('input', handleInputChange)
        }
    }, [])

    return (
        <input
            style={{ backgroundSize: progress }}
            ref={inputRef}
            {...rest}
            type="range"
        />
    )
}
