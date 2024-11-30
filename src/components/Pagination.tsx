import React from 'react'
import { useSearchParams } from 'react-router-dom'

interface PaginationProps {
    totalPages: number
    currentPage: number
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage }) => {
    const [searchParams, setSearchParams] = useSearchParams()

    const updatePage = (page: number) => {
        const newSearchParams = new URLSearchParams(searchParams)
        if (page === 1) {
            newSearchParams.delete('page')
        } else {
            newSearchParams.set('page', page.toString())
        }
        setSearchParams(newSearchParams)
    }

    const renderPageNumbers = () => {
        const pages = []

        // Always show the first page
        pages.push(
            <button
                key={1}
                onClick={() => updatePage(1)}
                className={`px-2 py-1 ${currentPage === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
                1
            </button>
        )

        // Add ellipses if needed after the first page
        if (currentPage > 4) {
            pages.push(<span key="start-ellipsis">...</span>)
        }

        // Show two pages before the current page
        for (let i = Math.max(2, currentPage - 2); i < currentPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => updatePage(i)}
                    className={`px-2 py-1 ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    {i}
                </button>
            )
        }

        // Show the current page
        if (currentPage !== 1 && currentPage !== totalPages) {
            pages.push(
                <button
                    key={currentPage}
                    onClick={() => updatePage(currentPage)}
                    className={`px-2 py-1 bg-blue-500 text-white`}
                >
                    {currentPage}
                </button>
            )
        }

        // Show two pages after the current page
        for (let i = currentPage + 1; i <= Math.min(totalPages - 1, currentPage + 2); i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => updatePage(i)}
                    className={`px-2 py-1 ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    {i}
                </button>
            )
        }

        // Add ellipses if needed before the last page
        if (currentPage < totalPages - 3) {
            pages.push(<span key="end-ellipsis">...</span>)
        }

        // Always show the last page
        if (totalPages > 1) {
            pages.push(
                <button
                    key={totalPages}
                    onClick={() => updatePage(totalPages)}
                    className={`px-2 py-1 ${currentPage === totalPages ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    {totalPages}
                </button>
            )
        }

        return pages
    }

    return (
        <div className="flex justify-between">
            <button
                onClick={() => updatePage(currentPage - 1)}
                disabled={currentPage <= 1}
                className="px-2 py-1 bg-gray-200 disabled:opacity-50"
            >
                Previous
            </button>

            <div className="flex justify-center items-center gap-2">
                {renderPageNumbers()}
            </div>

            <button
                onClick={() => updatePage(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className="px-2 py-1 bg-gray-200 disabled:opacity-50"
            >
                Next
            </button>
        </div>
    )
}

export default Pagination
