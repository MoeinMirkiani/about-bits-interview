import HomePage from "./pages/HomePage.tsx"
import ArtworkPage from "./pages/ArtworkPage.tsx"
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/artworks/:id" element={<ArtworkPage />} />
        </Route>
    )
)

const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App
