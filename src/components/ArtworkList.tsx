import React, { useEffect, useState } from 'react'
import { listArtworks, type Artwork } from '../services/artworks.ts'
import { useSearchParams } from "react-router-dom"
import ArtworkListItem from "./ArtworkListItem.tsx"
import Pagination from "./Pagination.tsx"

const ArtworksList: React.FC = () => {
    const [artworks, setArtworks] = useState<Artwork[]>([])
    const [pagination, setPagination] = useState<{ totalPages: number, currentPage: number }>({ totalPages: 1, currentPage: 1 });
    const [searchParams] = useSearchParams()
    const page = parseInt(searchParams.get('page') ?? '1')
    const query = searchParams.get('search') ?? ''

    useEffect(() => {
        (async () => {
            try {
                const data = await listArtworks(page, query)
                setPagination({ totalPages: data.pagination.total_pages, currentPage: data.pagination.current_page })
                setArtworks(data.data)
            } catch (e: unknown) {
                console.error(e)
            }
        })()
    }, [page, query])

    return (
        <div className="overflow-hidden bg-white border border-neutral-200 rounded-xl">
            <ul className="divide-y divide-primary-500-0.1">
                {artworks.map(artwork => (
                    <ArtworkListItem key={artwork.id} artwork={artwork}/>
                ))}
            </ul>

            <Pagination totalPages={pagination.totalPages} currentPage={pagination.currentPage} />
        </div>
    )
}

export default ArtworksList
