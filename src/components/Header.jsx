import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Header() {
    const style = {
        color: 'white',
        backgroundColor: 'white',
    }
    return (
        <header>
            <Link to="/" className='title-container'>
                <FontAwesomeIcon icon={faHouse} className='title-icon' />
                <h1 className="title-name">bnb reservations</h1>
            </Link>

            <div className="profile-container">
                <p className="profile-description">Host your home</p>
                <div className="profile-button">
                    <FontAwesomeIcon icon={faUser} />                    
                </div>
            </div>
        </header>
    )
}