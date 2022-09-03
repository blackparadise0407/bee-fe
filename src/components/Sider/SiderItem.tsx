import { memo, ReactElement, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { NavLink, NavLinkProps } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEventListener } from '@bee/hooks/useEventListener'

export type SiderItemProps = Omit<NavLinkProps, 'to' | 'children'> & {
    outlinedIcon?: ReactElement
    filledIcon?: ReactElement
    label: string
    path: string
    collapsed?: boolean
}

interface Position {
    clientX: number
    clientY: number
}

const OFFSET = 10

export const SiderItem = memo(function SiderItem({
    outlinedIcon,
    filledIcon,
    label,
    path,
    collapsed,
    ...rest
}: SiderItemProps) {
    const divRef = useRef<HTMLDivElement>(null)
    const [pos, setPos] = useState<Position>({
        clientX: 0,
        clientY: 0,
    })

    useEventListener(
        'mousemove',
        (e) => {
            collapsed &&
                setPos({
                    clientX: e.clientX,
                    clientY: e.clientY,
                })
        },
        divRef,
    )

    useEventListener(
        'mouseleave',
        (_) => {
            setPos({
                clientX: 0,
                clientY: 0,
            })
        },
        divRef,
    )

    return (
        <div
            ref={divRef}
            className={clsx('relative my-1', collapsed ? 'px-3' : 'px-6')}
        >
            <NavLink
                className={({ isActive }) =>
                    clsx(
                        'group flex items-center px-4 py-3.5 rounded-xl hover:bg-black hover:text-white transition-colors',
                        isActive && 'bg-black text-white',
                        collapsed && 'justify-center',
                    )
                }
                to={path}
                {...rest}
            >
                {({ isActive }) => (
                    <>
                        <AnimatePresence>
                            {isActive && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        transition: {
                                            duration: 0.2,
                                        },
                                    }}
                                    exit={{
                                        opacity: 0,
                                    }}
                                    className="absolute w-[3px] h-[90%] top-1/2 -translate-y-1/2 right-0 rounded bg-black"
                                ></motion.div>
                            )}
                        </AnimatePresence>
                        <span
                            className={clsx(
                                'text-gray-500 text-lg group-hover:text-white transition-colors',
                                isActive && 'text-white',
                            )}
                        >
                            {isActive ? filledIcon : outlinedIcon}
                        </span>
                        {!collapsed && (
                            <span
                                className={clsx(
                                    'ml-2 text-gray-500 text-sm font-semibold group-hover:text-white transition-colors',
                                    isActive && 'text-white',
                                )}
                            >
                                {label}
                            </span>
                        )}
                    </>
                )}
            </NavLink>
            {!!pos.clientX && !!pos.clientY && (
                <div
                    className="fixed py-1 px-3 bg-black rounded-full text-white text-sm shadow z-[60]"
                    style={{
                        top: pos.clientY + OFFSET + 'px',
                        left: pos.clientX + OFFSET + 'px',
                    }}
                >
                    {label}
                </div>
            )}
        </div>
    )
})
