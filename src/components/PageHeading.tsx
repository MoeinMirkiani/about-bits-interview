import React from 'react'

interface Props {
    children: React.ReactNode
}

const PageHeading: React.FC<Props> = ({ children }) => {
    return (
        <div className="lg:py-3">{children}</div>
    )
}

export default PageHeading
