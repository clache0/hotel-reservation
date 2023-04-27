import { useRef, useEffect } from "react"
import privacyData from "../../assets/privacyData"

export default function Privacy(props) {
    const privacyRef = useRef(null)

    // set up event listener for clicking outside of dropdowns
    useEffect(() => {
        function handleClickOutside(event) {
            if ((privacyRef.current && !privacyRef.current.contains(event.target))) {
                props.togglePrivacy()
            }
        }

        const timeoutId = setTimeout(() => {
            window.addEventListener("click", handleClickOutside)
        }, 200) // set delay to adding event listener bc card would close before opening

        return () => {
            clearTimeout(timeoutId)
            window.removeEventListener("click", handleClickOutside)
        }
    }, [props.showPrivacy])

    return (
        <div className="footer-pop-up" ref={privacyRef}>
            <h3>Privacy</h3>
            <p>{privacyData}</p>
            <p>Last Updated: April 26, 2023</p>
        </div>
    )
}