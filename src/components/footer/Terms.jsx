import { useRef, useEffect } from "react"
import termsData from "../../assets/termsData";

export default function Terms(props) {
    const termsRef = useRef(null)

    // set up event listener for clicking outside of dropdowns
    useEffect(() => {
        function handleClickOutside(event) {
            if ((termsRef.current && !termsRef.current.contains(event.target))) {
                props.toggleTerms()
            }
        }

        const timeoutId = setTimeout(() => {
            window.addEventListener("click", handleClickOutside)
        }, 200) // set delay to adding event listener bc card would close before opening

        return () => {
            clearTimeout(timeoutId)
            window.removeEventListener("click", handleClickOutside)
        }
    }, [props.showTerms])

    return (
        <div className="footer-pop-up" ref={termsRef}>
            <h3>Terms of Service</h3>
            <p>{termsData}</p>
            <p>Last Updated: April 26, 2023</p>
        </div>
    )
}