import Header from './components/Header'
import Footer from './components/footer/Footer'
import SearchBar from './components/searchBar/SearchBar'
import PopularOffers from './components/PopularOffers'
import Explore from './components/explore/Explore'
import JoinMember from './components/JoinMember'

function Home() {
    const styles = {
        main: {
            backgroundImage: "url(https://i.imgur.com/FU5CQgS.jpg)",
        }
    }

    return (
        <div className="app-container">
            <main className='center-horizontal'
                style={styles.main}
            >
                <SearchBar />
            </main>
            <PopularOffers />
            <JoinMember />
            <Explore />
        </div>
    )
}

export default Home
