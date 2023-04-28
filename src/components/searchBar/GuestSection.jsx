import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"

export default function GuestSection(props) {


    return (
        <div className="guest-dropdown-section">
            <div className="guest-dropdown-left-container">
                <h5 className="guest-dropdown-title">{props.type}</h5>
                <p className="guest-dropdown-description">{props.description}</p>
            </div>

            <div className="guest-dropdown-right-container">
                <div className={`guest-dropdown-minus-button center 
                                ${props.disable ? "button-disabled" : ""}`}
                    onClick={props.numType > 0 ?
                        () => {
                            if (!props.disable) {
                                props.decrementNum(props.type)
                            }
                        }:
                        undefined
                    }
                >
                    <FontAwesomeIcon icon={faMinus} />
                </div>

                <div className="guest-dropdown-counter center">{props.numType}</div>

                <div className="guest-dropdown-plus-button center"
                    onClick={() => {
                        props.incrementNum(props.type)
                    }}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </div>
            </div>
        </div>
    )
}