import React from 'react'
import { motion } from 'framer-motion'

const CommonButton = ({ children, style, type, onClick, className }) => {
    return (
        <>
            <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                }}
                className={className}
                onClick={onClick}
                style={style}
                type={type}
            >
                {children}
            </motion.button>
        </>
    )
}

export default CommonButton