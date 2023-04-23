import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function DestDropdown(props) {
    return (
        <div className="dest-dropdown">
            <input 
                type="text" 
                placeholder="Destination"
                className="dest-input"
            />

            <div className="curr-loc-container">
                <FontAwesomeIcon icon={faLocationDot} />
                <p className="curr-loc dropdown-text">
                    Current Location
                </p>
            </div>

            <p className="dropdown-text light-grey underline" >
                Popular Destinations
            </p>

            <ul className="popular-dest">
                <li className="dest-item">
                    New York, NY
                </li>
                <li className="dest-item">
                    Miami, Florida
                </li>
                <li className="dest-item">
                    Seattle, WA
                </li>
            </ul>
        </div>
    )
}