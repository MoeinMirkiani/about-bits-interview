import Search from '../components/Search.tsx'
import PageHeading from "../components/PageHeading.tsx"
import ArtworkList from "../components/ArtworkList.tsx"

const HomePage = () => {
    return (
        <>
            <div className="container max-w-[1000px] mx-auto py-6 px-4 lg:py-16">
                <PageHeading>
                    <h1 className="text-heading-medium text-primary-950">Artworks</h1>
                </PageHeading>

                <div className="flex flex-col justify-items-center my-2 lg:flex-row lg:items-center lg:justify-between lg:mt-4">
                    <h6 className="text-title-medium text-primary-950 my-4 lg:my-0">List of Artworks</h6>
                    <Search queryParam="keyword"/>
                </div>

                <ArtworkList />
            </div>
        </>
    )
}

export default HomePage
