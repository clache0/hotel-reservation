import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function Back() {
    const navigate = useNavigate()

    return(
        <div className="back-button"
            onClick={() => navigate(-1)}
        >
            <FontAwesomeIcon icon={faChevronLeft} />
            <p className="back-button-text">Back</p>
        </div>
    )
}