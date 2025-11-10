import { Routes, Route } from "react-router-dom"
import { Home, About, Vision, Events, Gallery, Contacts } from "./pages"
import { Header, Footer, StarBackground } from "./components"

const App = () => {
    return (
        <div>
            <StarBackground />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vision" element={<Vision />} />
                <Route path="/events" element={<Events />} />
                <Route path="/gallery" element={<Gallery />} />
            
                <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
