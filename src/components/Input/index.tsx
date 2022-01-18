import { HTMLProps, memo, ReactNode } from 'react'
import clsx from 'clsx'

type InputProps = {
    className?: string
    icon?: ReactNode
    fullWidth?: boolean
    onIconClick?: (value: any) => void
    inputProps?: HTMLProps<HTMLInputElement>
}

export default memo(function Input({
    className = '',
    icon,
    fullWidth = false,
    onIconClick = () => {},
    inputProps,
}: InputProps) {
    const handleIconClick = () => {
        onIconClick(inputProps?.value)
    }

    return (
        <div className={clsx('relative w-full', className)}>
            {icon && (
                <span
                    className="absolute top-1/2 left-3 -translate-y-1/2 text-xl text-gray-600 hover:text-gray-400 cursor-pointer transition-colors"
                    onClick={handleIconClick}
                >
                    {icon}
                </span>
            )}
            <input
                className={clsx(
                    'pr-5 py-2.5 text-base font-semibold rounded-3xl focus:ring-1 focus:ring-sky-200 border-none outline-none placeholder:text-gray-300 placeholder:text-sm',
                    fullWidth && 'w-full',
                    icon ? 'pl-10' : 'pl-5',
                )}
                {...inputProps}
            />
        </div>
    )
})
