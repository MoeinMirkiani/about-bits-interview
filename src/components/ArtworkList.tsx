import React, { useEffect, useState } from 'react'
import { listArtworks, type Artwork } from '../services/artworks.ts'
import { useSearchParams } from "react-router-dom"
import ArtworkListItem from "./ArtworkListItem.tsx"

const ArtworksList: React.FC = () => {
    const [artworks, setArtworks] = useState<Artwork[]>([])
    const [searchParams] = useSearchParams()
    const page = parseInt(searchParams.get('page') ?? '1')
    const query = searchParams.get('search') ?? ''

    useEffect(() => {
        (async () => {
            try {
                const data = await listArtworks(page, query)
                setArtworks(data.data)
            } catch (e: unknown) {
                console.error(e)
            }
        })()
    }, [page, query])

    return (
        <ul className="overflow-hidden bg-white border border-neutral-200 rounded-xl divide-y divide-primary-500-0.1">
            {artworks.map((artwork) => (
                <ArtworkListItem key={artwork.id} artwork={artwork}/>
            ))}
        </ul>
    )
}

export default ArtworksList
