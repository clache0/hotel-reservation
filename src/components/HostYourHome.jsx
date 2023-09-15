import Back from "./Back"
import "../styles/HostYourHome.css"
import HostEasily from "./HostEasily"
import HostCover from "./HostCover"
import HostEarnings from "./HostEarnings"

const HostYourHome = () => {

    return (
        <>
            <Back />

            <div className="host-container">
                <HostEarnings />

                <HostEasily />

                <HostCover />

            </div>

        </>

    )
}
export default HostYourHome