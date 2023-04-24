import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import PopularOffers from './components/PopularOffers'
import Offer from './components/Offer'
import Explore from './components/Explore'

function App() {
    const styles = {
        main: {
            backgroundImage: "url(https://i.imgur.com/bYS5foa.jpg)",
        }
    }

    return (
        <div className="app-container">
            <Header />
            <main className='center-horizontal'
                style={styles.main}
            >
                <SearchBar />
            </main>
            <PopularOffers />
            <Explore />
            <Footer />
        </div>
    )
}

export default App
