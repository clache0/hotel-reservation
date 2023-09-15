import { faCheck, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const HostCoverEntry = (props) => {
    return (
        <div className="host-cover-entry-container table-grid">
            <div className="col1">
                <h3 className="host-cover-entry-title">{props.title}</h3>
                <p className="host-cover-entry-description">{props.description}</p>
            </div>

            <div className="col2">
                {props.isCovered ? 
                <FontAwesomeIcon icon={faCheck} className="check"/> : 
                <FontAwesomeIcon icon={faX} className="x"/>}
            </div>

            <div className="col3">
                {props.isCoveredComp ? 
                <FontAwesomeIcon icon={faCheck} className="check"/> : 
                <FontAwesomeIcon icon={faX} className="x"/>}
            </div>

        </div>
    )
}
export default HostCoverEntry