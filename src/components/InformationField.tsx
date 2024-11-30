import React, { ReactElement, cloneElement } from "react"

interface Props {
    label: string
    value: string
    icon: ReactElement
}

const InformationField: React.FC<Props> = ({ label, value, icon }) => {
    return (
        <div className="bg-primary-50 flex justify-between items-center gap-3 p-4 rounded-xl">
            <div>
                <p className="text-label-small text-primary-950">{label}</p>
                <p className="text-title-medium text-primary-950">{value}</p>
            </div>
            {cloneElement(icon, { className: 'size-6 flex-none' })}
        </div>
    )
}

export default InformationField
