import { useEffect, useState } from "react"
import Offer from "./Offer"
import offerData from "../assets/offerData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import "../styles/PopularOffers.css"

export default function PopularOffers() {
    const [activeOfferIndex, setActiveOffer] = useState(0)

    const numOffers = offerData.length

    // render multiple <Offer /> from offerData.js
    const offers = offerData.map((offer, index) => {        
        return (
            <Offer
                key={offer.id}
                image={offer.image}
                date={offer.date}
                description={offer.description}
                activeOfferIndex={activeOfferIndex}
            />
        )
    })

    // array of dots to represent active offers
    const dots = Array.from(Array(numOffers), (dot, index) => {
        return (
            <div
                key={index}
                className={`dot ${index === activeOfferIndex ? "active" : ""}`}
                onClick={() => setActiveOffer(index)}
            >
            </div>
        )
    })

    // if next offer is last offer, return to first offer
    function handleNextOffer() {
        setActiveOffer(activeOfferIndex === numOffers-1 ? 
            0 :
            activeOfferIndex+1 )
    }
    
    // if prev offer is first offer, return to last offer
    function handlePrevOffer() {
        setActiveOffer(activeOfferIndex === 0 ? 
            numOffers-1 :
            activeOfferIndex-1 )
    }
    
    return (
        <div className="popular-offers-container">
            <h2 className="section-title">Popular Offers</h2>

            <div className='carousel-container'>
                {offers}
            </div>

            <div className="arrow-container">
                    <FontAwesomeIcon 
                        icon={faArrowLeft} 
                        className="arrow-icon"
                        onClick={handlePrevOffer}
                    />
                    {dots}
                    <FontAwesomeIcon 
                        icon={faArrowRight} 
                        className="arrow-icon"
                        onClick={handleNextOffer}
                    />
            </div>
        </div>
    )
}