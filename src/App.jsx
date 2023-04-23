import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import PopularOffers from './components/PopularOffers'
import Offer from './components/Offer'
import Explore from './components/Explore'

function App() {
    const initialCarouselState = {
        offset: 0,
        desired: 0,
        active: 0,
    }

    return (
        <div className="app-container">
            <Header />
            <main className='center-horizontal'>
                <SearchBar />
            </main>
            <PopularOffers />
            <Explore />
            <Footer />
        </div>
    )
}

export default App
