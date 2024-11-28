import PageHeading from "./components/PageHeading.tsx"

const App = () => {
    return (
        <>
            <div className="container mx-auto py-6 px-4 lg:py-16">
                <PageHeading>
                    <h1 className="text-heading-medium text-primary-950">Artworks</h1>
                </PageHeading>
            </div>
        </>
    )
}

export default App
