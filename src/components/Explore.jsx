import ExploreSmall from "./ExploreSmall";
import exploreData from "../assets/exploreData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import ExploreSmallReverse from "./ExploreSmallReverse";

export default function Explore(props) {
    const explore0 = exploreData[0]
    const explore1 = exploreData[1]
    const explore2 = exploreData[2]

    return (
        <div className="explore-container">
            <h2 className="section-title" >Explore Destinations</h2>

            <div className="grid-container">
                <div className="grid-item item1 explore-large" >
                    <div className="explore-large-text">
                        <p>
                            {explore0.description}
                        </p>
                        <div className="underline" style={{width:"50%"}}></div>
                        <h2 className="explore-location" >{explore0.location}</h2>
                        <div className="explore-button center" >
                            <p style={{marginRight: "10px"}}>Explore</p>
                            <FontAwesomeIcon 
                                icon={faArrowRight}
                                className="explore-button-arrow"
                            />                        
                        </div>
                    </div>
                </div>

                <div className="grid-item item2 center" >
                    <ExploreSmallReverse
                        key={explore1.id}
                        image={explore1.image}
                        description={explore1.description}
                        location={explore1.location}
                    />
                </div>

                <div className="grid-item item3" >
                    <ExploreSmall
                        key={explore2.id}
                        image={explore2.image}
                        description={explore2.description}
                        location={explore2.location}
                    />
                </div>
            </div>

        </div>
    )
}