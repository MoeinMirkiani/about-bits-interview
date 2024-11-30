import axios, { AxiosInstance, AxiosResponse } from 'axios'

const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://api.artic.edu/api/v1/',
    headers: {
        'Content-Type': 'application/json'
    }
})

interface Pagination {
    total: number
    limit: number
    offset: number
    total_pages: number
    current_page: number
    next_url: string | null
}

interface Artwork {
    id: string
    title: string
    thumbnail: {
        lqip: string
        width: number
        height: number
        alt_text: string
    }
    artist_titles: string[]
    description: string
    place_of_origin: string
    date_display: string
    date_start: string
    date_end: string
}

interface ListResponse {
    pagination: Pagination
    data: Artwork[]
}

interface SingleResponse {
    data: Artwork
}

const listArtworks = async (page: number, query: string): Promise<ListResponse> => {
    try {
        const endpoint = query ? `artworks/search?q=${query}&page=${page}` : `artworks?page=${page}`
        const response: AxiosResponse<ListResponse> = await apiClient.get(endpoint)
        return response.data
    } catch (error) {
        throw new Error(`Error fetching artworks: ${error}`)
    }
}

const fetchArtwork = async (id: string): Promise<SingleResponse> => {
    try {
        const response = await apiClient.get(`/artworks/${id}`)
        return { data: response.data.data }
    } catch (error) {
        throw new Error(`Error fetching artwork: ${error}`)
    }
}

export { type Artwork, listArtworks, fetchArtwork }
