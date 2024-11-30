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
    [key: string]: string | number | boolean
}

interface ApiResponse {
    pagination: Pagination
    data: Artwork[]
}

const listArtworks = async (page: number = 1): Promise<ApiResponse> => {
    try {
        const response: AxiosResponse<ApiResponse> = await apiClient.get(`/artworks?page=${page}`)
        return response.data
    } catch (error) {
        throw new Error(`Error fetching artworks: ${error}`)
    }
}

export { type Artwork, listArtworks }
