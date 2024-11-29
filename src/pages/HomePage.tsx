import Search from '../components/Search.tsx'
import PageHeading from "../components/PageHeading.tsx"

const HomePage = () => {
    return (
        <>
            <div className="container mx-auto py-6 px-4 lg:py-16">
                <PageHeading>
                    <h1 className="text-heading-medium text-primary-950">Artworks</h1>
                </PageHeading>

                <div>
                    <h6 className="text-title-medium text-primary-950">List of Artworks</h6>
                    <Search queryParam="keyword"/>
                </div>
            </div>
        </>
    )
}

export default HomePage
