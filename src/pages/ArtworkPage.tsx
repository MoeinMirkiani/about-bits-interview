import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {fetchArtwork, type Artwork} from '../services/artworks'
import Button from '../components/Button.tsx'
import InformationField from "../components/InformationField.tsx"
import ArrowLeftIcon from '../assets/icons/arrow-left.svg?react'
import LocationIcon from '../assets/icons/location.svg?react'
import CalendarIcon from '../assets/icons/calendar.svg?react'
import StartDateIcon from '../assets/icons/start-date.svg?react'
import EndDateIcon from '../assets/icons/end-date.svg?react'

const ArtworkPage: React.FC = () => {
    const {id} = useParams<{ id: string }>()
    const [artwork, setArtwork] = useState<Artwork | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            try {
                if (id) {
                    const response = await fetchArtwork(id)
                    setArtwork(response.data)
                } else {
                    navigate('/')
                }
            } catch (e) {
                console.error(e)
            }
        })()
    }, [id, navigate])

    return !artwork
        ? (
            <div className="container max-w-[1000px] mx-auto py-6 px-4 lg:py-16">Loading...</div>
        )
        : (
            <div className="container max-w-[1000px] mx-auto py-6 px-4 lg:py-16">
                <div className="flex items-center gap-3 mb-6">
                    <Button onClick={() => navigate('/')} prependIcon={<ArrowLeftIcon className="size-10"/>}/>
                    <h1 className="text-heading-medium text-primary-950 truncate">{artwork.title}</h1>
                </div>

                <div className="grid grid-cols-1 mb-6 rounded-xl overflow-hidden md:grid-cols-2">
                    <div>
                        <img
                            src={artwork.thumbnail.lqip}
                            alt={artwork.thumbnail.alt_text}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="bg-white px-4 py-6 border-x border-b border-neutral-200 rounded-b-xl md:px-6 md:py-8 md:border-y md:border-l-0 md:rounded-l-none md:rounded-xl">
                        <div className="flex flex-wrap gap-2">
                            {artwork.artist_titles.map(artist => (
                                <span key={artist} className="text-title-medium text-primary-950">{artist}</span>
                            ))}
                        </div>
                        <h3 className="text-heading-large text-primary-950 mb-4 md:mb-6">{artwork.title}</h3>

                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                            <InformationField label="Place of Origin" value={artwork.place_of_origin} icon={<LocationIcon />} />
                            <InformationField label="Display date" value={artwork.date_display} icon={<CalendarIcon />} />
                            <InformationField label="Start date" value={artwork.date_start} icon={<StartDateIcon />} />
                            <InformationField label="End date" value={artwork.date_end} icon={<EndDateIcon />} />
                        </div>
                    </div>
                </div>

                <div className="bg-white px-4 py-6 border border-t-neutral-200 rounded-xl md:p-6">
                    <h4 className="text-title-medium text-primary-950 mb-3">Description</h4>
                    <div
                        className="text-body-medium text-primary-950"
                        dangerouslySetInnerHTML={{ __html: artwork.description }}
                    />
                </div>
            </div>
        )
}

export default ArtworkPage
