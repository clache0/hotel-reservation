import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import DestDropdown from "./DestDropdown"
import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import GuestDropdown from "./GuestDropdown";
import "../../styles/SearchBar.css"

export default function SearchBar() {

    const [openDest, setOpenDest] = useState(false)
    const [openDatePicker, setOpenDatePicker] = useState(false)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [openGuest, setOpenGuest] = useState(false)

    const [numAdults, setNumAdults] = useState(0) // count num of adults in reservation
    const [numChildren, setNumChildren] = useState(0) // count num of children in reservation
    const [numInfants, setNumInfants] = useState(0) // count num of infants in reservation
    const [numPets, setNumPets] = useState(0) // count num of pets in reservation
    const [totalResNum, setTotalResNum] = useState(0) // sum of num of total guest

    // determines if the decrement button should be disabled
    const [adultsDisable, setAdultsDisable] = useState(true)
    const [childrenDisable, setChildrenDisable] = useState(true)
    const [infantsDisable, setInfantsDisable] = useState(true)
    const [petsDisable, setPetsDisable] = useState(true)

    const [destination, setDestination] = useState("Anywhere") // search bar destination string
    const [searchBarActive, setSearchBarActive] = useState(false) // search bar has been clicked

    const destRef = useRef(null) // destination drop down
    const datePickerRef = useRef(null) // date picker drop down
    const guestRef = useRef(null) // guest selector drop down

    // -----------------------------------------------------------------
    // ----------------------------useEffect----------------------------

    // set up event listener for clicking outside of dropdowns
    useEffect(() => {
        function handleClickOutside(event) {
            if ((destRef.current && !destRef.current.contains(event.target)) || 
            datePickerRef.current && !datePickerRef.current.contains(event.target) ||
            guestRef.current && !guestRef.current.contains(event.target)
            ) {
                closeDropdowns()
            }
        }

        if (openDest || openDatePicker || openGuest) {
            // set delay to adding event listener bc card would close before opening
            setTimeout(() => {
                window.addEventListener("click", handleClickOutside)
            }, 200) 
        }

        return () => {
            window.removeEventListener("click", handleClickOutside)
        }
    }, [openDest, openDatePicker, openGuest])
    
    // calculate total number of guest from adults and children
    useEffect(() => {
        setTotalResNum(numAdults+numChildren)
    }, [numAdults, numChildren])

    // disable decrement button logic
    useEffect(() => {
        if (numAdults > 0) {
            if (numAdults === 1 &&
                (numChildren > 0 || numInfants > 0 || numPets > 0)) {
                setAdultsDisable(true)
            } else {
                setAdultsDisable(false)
            }
        } else {
            setAdultsDisable(true)
        }
        setChildrenDisable(numChildren > 0 ? false : true)
        setInfantsDisable(numInfants > 0 ? false : true)
        setPetsDisable(numPets > 0 ? false : true)
    }, [numAdults, numChildren, numInfants, numPets])

    // determines text to display in guest field of search bar
    let guestField 
    if (totalResNum === 0) {
        guestField = "Add guest"
    } else {
        guestField = `${totalResNum} guest`
        if (totalResNum > 1) {
            guestField += 's'
        }
    }

    if (numInfants > 0) {
        guestField += `, ${numInfants} infant`
        if (numInfants > 1) {
            guestField += 's'
        }
    }

    if (numPets > 0) {
        guestField += `, ${numPets} pet`
        if (numPets > 1) {
            guestField += 's'
        }
    }

    // -----------------------------------------------------------------
    // ----------------------------functions----------------------------
    function handleOpenDest() {
        setOpenDest(true) // toggle destination drop down
        setOpenDatePicker(false) // close other drop down if open
        setOpenGuest(false)
        setSearchBarActive(true)
    }

    function handleOpenDatePicker() {
        setOpenDest(false) // close other drop down if open
        setOpenDatePicker(true) // toggle date picker
        setOpenGuest(false)
        setSearchBarActive(true)
    }

    function handleChangeDate(dates) {
        const [start, end] = dates
        setStartDate(start)
        setEndDate(end)
    }

    function handleOpenGuest() {
        setOpenDest(false)
        setOpenDatePicker(false)
        setOpenGuest(true)
        setSearchBarActive(true)
    }

    function closeDropdowns() {
        setOpenDest(false)
        setOpenDatePicker(false)
        setOpenGuest(false)
        setSearchBarActive(false)
    }

    function incrementNum(type) {
        switch (type) {
            case "Adults":
                setNumAdults(prevCount => prevCount + 1)
                break
            case "Children":
                setNumChildren(prevCount => prevCount + 1)
                if (numAdults === 0) {
                    setNumAdults(1)
                }
                break
            case "Infants":
                setNumInfants(prevCount => prevCount + 1)
                if (numAdults === 0) {
                    setNumAdults(1)
                }
                break
            case "Pets":
                setNumPets(prevCount => prevCount + 1)
                if (numAdults === 0) {
                    setNumAdults(1)
                }
                break
            default:
                break
        }
    }

    function decrementNum(type) {
        switch (type) {
            case "Adults":
                setNumAdults(prevCount => prevCount - 1)
                break
            case "Children":
                setNumChildren(prevCount => prevCount - 1)
                break
            case "Infants":
                setNumInfants(prevCount => prevCount - 1)
                break
            case "Pets":
                setNumPets(prevCount => prevCount - 1)
                break
            default:
                break
        }
    }

    function handleDestinationChange(newDestination) {
        setDestination(newDestination)
    }

    // --------------------------------------------------------------
    // ----------------------------return----------------------------
    return (
        <div className={`search-bar 
            ${searchBarActive ? "active" : ""}`}>

            <div className={openDest ? 
                "dropdown-container active" : 
                "dropdown-container"}
            >
                { 
                    openDest && 
                    <DestDropdown closeDropdowns={closeDropdowns}
                        openDest={openDest}
                        destRef={destRef}
                        destination={destination}
                        handleDestinationChange={handleDestinationChange}
                    /> 
                } 
            </div>

            <p 
                className="search-bar--field"
                onClick={handleOpenDest} 
            >
                {destination ? destination : "Anywhere"}
            </p>

            <div className={openDatePicker ? 
                "dropdown-container active" : 
                "dropdown-container"}
            >
                {
                    openDatePicker &&
                    <div className="date-picker-container"
                        ref={datePickerRef}
                    >
                        <p className="date-picker-title">Check In - Check Out</p>
                        <DatePicker 
                            selected={startDate}
                            onChange={handleChangeDate}
                            className="date-picker"
                            isClearable
                            selectsRange
                            minDate={new Date()}
                            placeholderText="Add dates"
                            todayButton="Today"
                            startDate={startDate}
                            endDate={endDate}
                        /> 
                    </div>
                }
            </div>

            <p 
                className="search-bar--field"
                onClick={handleOpenDatePicker}
            >
                {startDate && endDate ?
                `${startDate.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                })}
                to 
                ${endDate.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                })}` : 
                "Any week"}
            </p>

            <div className={openGuest ? 
                "dropdown-container active" : 
                "dropdown-container"}
            >
                { 
                    openGuest && 
                    <GuestDropdown 
                        numAdults={numAdults}
                        numChildren={numChildren}
                        numInfants={numInfants}
                        numPets={numPets}
                        incrementNum={incrementNum}
                        decrementNum={decrementNum}
                        adultsDisable = {adultsDisable}
                        childrenDisable = {childrenDisable}
                        infantsDisable = {infantsDisable}
                        petsDisable = {petsDisable}
                        guestRef={guestRef}
                    /> 
                } 
            </div>

            <p className="search-bar--field search-bar--field-last-child" 
                onClick={handleOpenGuest}
            >
                {guestField}
            </p>

            <span className='search-bar-circle' >
                <FontAwesomeIcon icon={faMagnifyingGlass} className='mag-glass-icon' />
            </span>

        </div>
    )
}