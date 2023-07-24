import React from 'react'

const CommonButton = ({ children, style, type, onClick, className }) => {
    return (
        <>
            <button
                className={className}
                onClick={onClick}
                style={style}
                type={type}
            >
                {children}
            </button>
        </>
    )
}

export default CommonButton