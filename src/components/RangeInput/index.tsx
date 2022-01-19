import { HTMLProps, useCallback, useEffect, useRef, useState } from 'react'

import './style.css'

export default function RangeInput({
    value,
    ...rest
}: HTMLProps<HTMLInputElement>) {
    const inputRef = useRef<HTMLInputElement>(null)
    const [progress, setProgress] = useState('')

    const handleInputChange = useCallback(() => {
        const target = inputRef.current
        if (target) {
            const min = parseFloat(target.min)
            const max = parseFloat(target.max)
            const val = parseFloat(value as string)
            const delta = max - min || 1
            setProgress(((val - min) * 100) / delta + '% 100%')
        }
    }, [value])

    useEffect(() => {
        handleInputChange()
    }, [value])

    return (
        <input
            style={{ backgroundSize: progress }}
            ref={inputRef}
            value={value}
            type="range"
            {...rest}
        />
    )
}
