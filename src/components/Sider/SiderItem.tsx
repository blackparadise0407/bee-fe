import { ReactElement } from 'react'
import clsx from 'clsx'
import { NavLink, NavLinkProps } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

export type SiderItemProps = Omit<NavLinkProps, 'to' | 'children'> & {
    outlinedIcon?: ReactElement
    filledIcon?: ReactElement
    label: string
    path: string
}

export function SiderItem({
    outlinedIcon,
    filledIcon,
    label,
    path,
    ...rest
}: SiderItemProps) {
    return (
        <div className="relative px-6 my-1">
            <NavLink
                className={({ isActive }) =>
                    clsx(
                        'group flex items-center px-4 py-3.5 rounded-xl hover:bg-black hover:text-white transition-colors',
                        isActive && 'bg-black text-white',
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
                                'text-gray-500 text-lg mr-2 group-hover:text-white',
                                isActive && 'text-white',
                            )}
                        >
                            {isActive ? filledIcon : outlinedIcon}
                        </span>
                        <span
                            className={clsx(
                                'text-gray-500 text-sm font-semibold group-hover:text-white',
                                isActive && 'text-white',
                            )}
                        >
                            {label}
                        </span>
                    </>
                )}
            </NavLink>
        </div>
    )
}
