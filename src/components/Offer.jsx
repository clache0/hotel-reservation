
export default function Offer(props) {
    const styles = {
        backgroundImage: `url(src/images/offers/${props.image}.jpg)`,
        transform: `translate(-${props.activeOfferIndex * 100}%)`
    }

    return (
        <div 
            className="offer center" 
            style={styles}
        >
            <div className="offer--container">
                <p className="offer--valid">VALID THROUGH {props.date}</p>

                <div className="underline" style={{width: "50%"}}></div>

                <h3 className="offer--description">{props.description}</h3>

                <div className="offer--view center">
                    <p className="offer--view-text">View Offer</p>
                </div>
            </div>
        </div>
    )
}