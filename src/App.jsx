import './App.css'
import Header from './components/Header'
import Footer from './components/footer/Footer'
import SearchBar from './components/searchBar/SearchBar'
import PopularOffers from './components/PopularOffers'
import Explore from './components/explore/Explore'
import JoinMember from './components/JoinMember'

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
            <JoinMember />
            <Explore />
            <Footer />
        </div>
    )
}

export default App
