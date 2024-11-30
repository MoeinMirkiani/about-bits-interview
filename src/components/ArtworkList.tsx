import React, { useEffect, useState } from 'react'
import { listArtworks, type Artwork } from '../services/artworks.ts'
import ArtworkListItem from "./ArtworkListItem.tsx"

const ArtworksList: React.FC = () => {
    const [artworks, setArtworks] = useState<Artwork[]>([])

    useEffect(() => {
        (async () => {
            try {
                const data = await listArtworks()
                setArtworks(data.data)
            } catch (e: unknown) {
                console.error(e)
            }
        })()
    }, [])

    return (
        <ul className="overflow-hidden bg-white border border-neutral-200 rounded-xl divide-y divide-primary-500-0.1">
            {artworks.map((artwork) => (
                <ArtworkListItem key={artwork.id} artwork={artwork}/>
            ))}
        </ul>
    )
}

export default ArtworksList
