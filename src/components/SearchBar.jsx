import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import DestDropdown from "./DestDropdown"
import { Children, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import GuestDropdown from "./GuestDropdown";

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

    // -----------------------------------------------------------------
    // ----------------------------useEffect----------------------------
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
        setOpenDest(!openDest) // toggle destination drop down
        setOpenDatePicker(false) // close other drop down if open
        setOpenGuest(false)
    }

    function handleOpenDatePicker() {
        setOpenDest(false) // close other drop down if open
        setOpenDatePicker(!openDatePicker) // toggle date picker
        setOpenGuest(false)
    }

    function handleChangeDate(dates) {
        const [start, end] = dates
        setStartDate(start)
        setEndDate(end)
    }

    function handleOpenGuest() {
        setOpenDest(false)
        setOpenDatePicker(false)
        setOpenGuest(!openGuest)
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

    // --------------------------------------------------------------
    // ----------------------------return----------------------------
    return (
        <div className="search-bar">
            <div className={openDest ? 
                "dropdown-container active" : 
                "dropdown-container"}
            >
                { openDest && <DestDropdown/> } 
            </div>

            <p 
                className="search-bar--field"
                onClick={handleOpenDest} 
            >
                Anywhere
            </p>

            <div className={openDatePicker ? 
                "dropdown-container active" : 
                "dropdown-container"}
            >
                {
                    openDatePicker &&
                    <div className="date-picker-container">
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
                    // year: "numeric",
                })}
                to 
                ${endDate.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    // year: "numeric",
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