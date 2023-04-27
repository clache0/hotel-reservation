import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import Terms from "./footer/Terms"
import "../styles/Footer.css"
import Privacy from "./footer/Privacy"
import PrivacySlider from "./footer/PrivacySlider"
import Language from "./footer/Language"

export default function Footer() {
    const [showTerms, setShowTerms] = useState(false)
    const [showPrivacy, setShowPrivacy] = useState(false)
    const [showLanguage, setShowLanguage] = useState(true)

    function toggleTerms() {
        setShowTerms(!showTerms)
    }
    
    function togglePrivacy() {
        setShowPrivacy(!showPrivacy)
    }

    function toggleLanguage() {
        setShowLanguage(!showLanguage)
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
                <p className="footer-item-right">English</p>
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
                />
            }
        </footer>
    )
}