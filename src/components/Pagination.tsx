import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Button from "./Button.tsx"
import ChevronRightIcon from '../assets/icons/chevron-right.svg?react'
import ChevronLeftIcon from '../assets/icons/chevron-left.svg?react'

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
            <Button
                key={1}
                onClick={() => updatePage(1)}
            >
                1
            </Button>
        )

        // Add ellipses if needed after the first page
        if (currentPage > 4) {
            pages.push(<span key="text-label-medium start-ellipsis">..</span>)
        }

        // Show two pages before the current page
        for (let i = Math.max(2, currentPage - 2); i < currentPage; i++) {
            pages.push(
                <Button
                    key={i}
                    onClick={() => updatePage(i)}
                >
                    {i}
                </Button>
            )
        }

        // Show the current page
        if (currentPage !== 1 && currentPage !== totalPages) {
            pages.push(
                <Button
                    key={currentPage}
                    onClick={() => updatePage(currentPage)}
                >
                    {currentPage}
                </Button>
            )
        }

        // Show two pages after the current page
        for (let i = currentPage + 1; i <= Math.min(totalPages - 1, currentPage + 2); i++) {
            pages.push(
                <Button
                    key={i}
                    onClick={() => updatePage(i)}
                >
                    {i}
                </Button>
            )
        }

        // Add ellipses if needed before the last page
        if (currentPage < totalPages - 3) {
            pages.push(<span key="end-ellipsis">..</span>)
        }

        // Always show the last page
        if (totalPages > 1) {
            pages.push(
                <Button
                    key={totalPages}
                    onClick={() => updatePage(totalPages)}
                >
                    {totalPages}
                </Button>
            )
        }

        return pages
    }

    return (
        <div className="flex justify-between px-2 py-4 bg-neutral-50 border-t border-t-neutral-200 md:px-4">
            <Button
                onClick={() => updatePage(currentPage - 1)}
                disabled={currentPage <= 1}
                prependIcon={<ChevronLeftIcon />}
            >
                <span className="hidden md:inline-flex">Previous</span>
            </Button>

            <div className="flex justify-center items-center">
                {renderPageNumbers()}
            </div>

            <Button
                onClick={() => updatePage(currentPage + 1)}
                disabled={currentPage >= totalPages}
                appendIcon={<ChevronRightIcon/>}
            >
                <span className="hidden md:inline-flex">Next</span>
            </Button>
        </div>
    )
}

export default Pagination
