import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import Terms from "./Terms"
import "../../styles/Footer.css"
import Privacy from "./Privacy"
import PrivacySlider from "./PrivacySlider"
import Language from "./Language"

export default function Footer() {
    const [showTerms, setShowTerms] = useState(false)
    const [showPrivacy, setShowPrivacy] = useState(false)
    const [showLanguage, setShowLanguage] = useState(true)

    const [language, setLanguage] = useState("English")

    function toggleTerms() {
        setShowTerms(!showTerms)
    }
    
    function togglePrivacy() {
        setShowPrivacy(!showPrivacy)
    }

    function toggleLanguage() {
        setShowLanguage(!showLanguage)
    }

    // change footer language and close pop up
    function handleLanguage(inputLanguage) {
        setLanguage(inputLanguage)
        setShowLanguage(false)
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

            <div className="footer-options center">
                <FontAwesomeIcon icon={faGlobe} />
                <p className="footer-item-right"
                    onClick={toggleLanguage}
                >{language}</p>
                <p className="footer-item-right">$ USD</p>
                <p className="footer-item-right">Support & Resources</p>
            </div>
            {
                showTerms &&
                <Terms
                showTerms={showTerms}
                toggleTerms={toggleTerms}
                />
            }
            {
                showPrivacy &&
                <Privacy
                showPrivacy={showPrivacy}
                togglePrivacy={togglePrivacy}
                />
            }
            {
                showLanguage &&
                <Language
                showLanguage={showLanguage}
                toggleLanguage={toggleLanguage}
                handleLanguage={handleLanguage}
                />
            }
        </footer>
    )
}