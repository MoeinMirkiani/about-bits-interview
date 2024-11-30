import React, { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode
    onClick: () => void
    prependIcon?: ReactNode
    appendIcon?: ReactNode
    className?: string
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, onClick, prependIcon, appendIcon, className, disabled }) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center px-2 py-1 bg-transparent text-primary-950 text-label-medium ${className} ${disabled ? 'cursor-not-allowed' : ''}`}
            disabled={disabled}
        >
            {prependIcon && <span className="size-4 flex-none">{prependIcon}</span>}
            <span className="flex-grow">{children}</span>
            {appendIcon && <span className="size-4 flex-none">{appendIcon}</span>}
        </button>
    )
}

export default Button
