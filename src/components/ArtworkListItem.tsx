import React from "react"
import { Link } from "react-router-dom"
import { type Artwork } from "../services/artworks.ts"
import ChevronRightIcon from '../assets/icons/chevron-right.svg?react'

interface Props {
    artwork: Artwork
}

const ArtworkListItem: React.FC<Props> = ({ artwork }) => {
    return (
        <li>
            <Link to={`/artworks/${artwork.id}`} className="flex justify-between items-center p-4 hover:bg-neutral-50 focus:border-y-neutral-950">
                <span className="text-body-large text-primary-950">{artwork.title}</span>
                <ChevronRightIcon className="size-6 flex-none" />
            </Link>
        </li>
    )
}

export default ArtworkListItem
