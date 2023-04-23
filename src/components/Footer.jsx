import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
    return (
        <footer>
            <div className="footer-terms center">
                <p className="footer-item-left">Terms</p>
                <p className="footer-item-left">Privacy</p>
                <p className="footer-item-left">Your Privacy Choices</p>
            </div>
            <div className="footer-options center">
                <FontAwesomeIcon icon={faGlobe} />
                <p className="footer-item-right">English</p>
                <p className="footer-item-right">$ USD</p>
                <p className="footer-item-right">Support & Resources</p>
            </div>
        </footer>
    )
}