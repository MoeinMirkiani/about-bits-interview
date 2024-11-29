import React, { useState, ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

interface Props {
    queryParam: string
}

const Search: React.FC<Props> = ({ queryParam }) => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [searchParams, setSearchParams] = useSearchParams()

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearchTerm(value)
        const newSearchParams = new URLSearchParams(searchParams)
        if (value) {
            newSearchParams.set(queryParam, value)
        } else {
            newSearchParams.delete(queryParam)
        }
        setSearchParams(newSearchParams)
    }

    return (
        <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search..."
            className="p-2 border rounded"
        />
    )
}

export default Search
