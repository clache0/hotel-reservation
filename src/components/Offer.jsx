import { Link } from "react-router-dom"

export default function Offer(props) {
    const styles = {
        backgroundImage: `url(${props.image})`,
        transform: `translate(-${props.activeOfferIndex * 100}%)`
    }

    return (
        <div 
            className="offer" 
            style={styles}
        >
            <div className="offer--container">
                <p className="offer--valid">VALID THROUGH {props.date}</p>

                <div className="underline" style={{width: "50%"}}></div>

                <h3 className="offer--description">{props.description}</h3>

                <Link to="under-construction" className="offer--view">
                    <p className="offer--view-text">View Offer</p>
                </Link>
            </div>
        </div>
    )
}