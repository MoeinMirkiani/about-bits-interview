import React, { useState, useEffect, ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchIcon from '../assets/icons/search.svg?react'

interface Props {
    queryParam: string
}

const Search: React.FC<Props> = ({ queryParam }) => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        const initialSearchTerm = searchParams.get(queryParam)
        if (initialSearchTerm) {
            setSearchTerm(initialSearchTerm)
        }
    }, [queryParam, searchParams])

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
        <div className="flex content-start items-center gap-3 bg-neutral-500-0.1 py-2 px-3 rounded-xl lg:py-3 lg:px-4">
            <SearchIcon className="size-6 flex-none" />
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search"
                className="bg-transparent text-label-large text-primary-950 outline-0"
            />
        </div>
    )
}

export default Search
