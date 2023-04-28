import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import Terms from "./Terms"
import "../../styles/Footer.css"
import Privacy from "./Privacy"
import PrivacySlider from "./PrivacySlider"
import Language from "./Language"
import Currency from "./Currency"

export default function Footer() {
    const [showTerms, setShowTerms] = useState(false)
    const [showPrivacy, setShowPrivacy] = useState(false)
    const [showLanguage, setShowLanguage] = useState(false)
    const [showCurrency, setShowCurrency] = useState(true)

    const [language, setLanguage] = useState("English") // active language
    const [currency, setCurrency] = useState("USD") // active currency

    function toggleTerms() {
        setShowTerms(!showTerms)
    }
    
    function togglePrivacy() {
        setShowPrivacy(!showPrivacy)
    }

    function toggleLanguage() {
        setShowLanguage(!showLanguage)
    }

    function toggleCurrency() {
        setShowCurrency(!showCurrency)
    }

    // change footer language and close pop up
    function handleLanguage(inputLanguage) {
        setLanguage(inputLanguage)
        setShowLanguage(false)
    }

    // change footer currency and close pop up
    function handleCurrency(inputCurrency) {
        setCurrency(inputCurrency)
        setShowCurrency(false)
    }

    return (
        <footer>
            <div className="footer-terms center">
                <p className="footer-item-left"
                    onClick={toggleTerms}
                >Terms</p>

                <p className="footer-item-left"
                    onClick={togglePrivacy}
                >Privacy</p>

                <PrivacySlider />
            </div>

            <div className={`dropdown-container 
                ${showTerms ? "active" : ""}`}>
            {
                showTerms &&
                <Terms
                showTerms={showTerms}
                toggleTerms={toggleTerms}
                />
            }
            </div>

            <div className={`dropdown-container 
                ${showPrivacy ? "active" : ""}`}>
            {
                showPrivacy &&
                <Privacy
                showPrivacy={showPrivacy}
                togglePrivacy={togglePrivacy}
                />
            }
            </div>

            <div className={`dropdown-container 
                ${showLanguage ? "active" : ""}`}>
            {
                showLanguage &&
                <Language
                language={language}
                showLanguage={showLanguage}
                toggleLanguage={toggleLanguage}
                handleLanguage={handleLanguage}
                />
            }
            </div>

            <div className={`dropdown-container 
                ${showCurrency ? "active" : ""}`}>
            {
                showCurrency &&
                <Currency
                currency={currency}
                showCurrency={showCurrency}
                toggleCurrency={toggleCurrency}
                handleCurrency={handleCurrency}
                />
            }
            </div>

            <div className="footer-options center">
                <FontAwesomeIcon icon={faGlobe} />

                <p className="footer-item-right"
                    onClick={toggleLanguage}
                >{language}</p>

                <p className="footer-item-right"
                    onClick={toggleCurrency}
                >{currency}</p>

                <p className="footer-item-right">Support & Resources</p>
            </div>




        </footer>
    )
}