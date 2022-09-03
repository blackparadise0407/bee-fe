import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type WithEffectButtonProps = {
    children: ReactNode
}

export default function WithEffectButton({ children }: WithEffectButtonProps) {
    return (
        <motion.div
            className="cursor-pointer select-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.div>
    )
}
