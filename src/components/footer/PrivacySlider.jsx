import { useState } from "react"

export default function PrivacySlider() {
    const [isActive, setIsActive] = useState(true)
    
    function toggleSlide() {
        setIsActive(!isActive)
    }

    return (
        <>
            <p className="footer-item-left"
                onClick={toggleSlide}
            >
                Allow Cookies
            </p>

            <div className="slider"
                onClick={toggleSlide}
                style={{backgroundColor: `${isActive ? "#A4B8EE" : ""}`}}
            >
                <div className="slider-active"
                    style={{transform: `translateX(${isActive ? "1rem": "0rem"})`}}
                ></div>
            </div>
        </>

    )
}