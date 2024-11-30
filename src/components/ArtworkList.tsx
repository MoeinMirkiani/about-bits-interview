import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { listArtworks, type Artwork } from '../services/artworks.ts'

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
        <div className="bg-white border border-neutral-200 rounded-xl">
            <ul>
                {artworks.map((artwork) => (
                    <li key={artwork.id}>
                        <Link to={`/artworks/${artwork.id}`}>
                            {artwork.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ArtworksList
