import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useRef, useEffect } from "react"
import popularDestData from "../../assets/popularDestData"

export default function DestDropdown(props) {
    const popularDest = popularDestData.map((dest, index) => {
        return (
            <li className="dest-item"
                onClick={() => handlePopDestClick(dest)}
                key={index}
            >
                {dest}
            </li>
        )
    })

    const handleInputChange = (event) => {
        props.handleDestinationChange(event.target.value)
    }

    function handlePopDestClick(newDestination) {
        props.handleDestinationChange(newDestination)
        props.closeDropdowns()
    }

    function handleEnter(event) {
        if (event.key === "Enter") {
            props.closeDropdowns()
        }
    }

    return (
        <div className="dest-dropdown" ref={props.destRef}>
            <input 
                type="text" 
                placeholder="Destination"
                className="dest-input"
                value={props.destination}
                onChange={handleInputChange}
                onKeyDown={handleEnter}
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
                {popularDest}
            </ul>
        </div>
    )
}