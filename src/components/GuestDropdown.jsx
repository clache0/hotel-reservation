
import GuestSection from "./GuestSection"

export default function GuestDropdown(props) {
    return (
        <div className="guest-dropdown">

            <GuestSection 
                type="Adults"
                description="Ages 13 or above"
                numType={props.numAdults}
                incrementNum={props.incrementNum}
                decrementNum={props.decrementNum}
                disable = {props.adultsDisable}
            />

            <GuestSection 
                type="Children"
                description="Ages 2 - 12"
                numType={props.numChildren}
                incrementNum={props.incrementNum}
                decrementNum={props.decrementNum}
                disable = {props.childrenDisable}
            />

            <GuestSection 
                type="Infants"
                description="Under 2"
                numType={props.numInfants}
                incrementNum={props.incrementNum}
                decrementNum={props.decrementNum}
                disable = {props.infantsDisable}
            />

            <GuestSection 
                type="Pets"
                description="Service Animals"
                numType={props.numPets}
                incrementNum={props.incrementNum}
                decrementNum={props.decrementNum}
                disable = {props.petsDisable}
            />

        </div>
    )
}