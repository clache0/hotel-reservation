import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function ExploreSmallReverse(props) {
    return (
        <div className="center">
            <div className="explore-small">
                <p className="light-grey" >
                    {props.description}
                </p>
                <div className="underline" style={{width:"50%"}}></div>
                <h2 className="explore-location" >{props.location}</h2>
                <div className="explore-button center" >
                    <p style={{marginRight: "10px"}}>Explore</p>
                    <FontAwesomeIcon 
                        icon={faArrowRight}
                        className="explore-button-arrow"
                    />
                </div>
            </div>
            <img 
                src={props.image}
                className="explore-small-image"
            />
        </div>
    )
}