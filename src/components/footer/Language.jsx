import LanguageData from "../../assets/LanguageData"
import { useRef, useEffect } from "react"

export default function Language(props) {
    const languageRef = useRef(null)

    // map languages to buttons
    const languageButtons = LanguageData.map((language, index) => {
        return (
            <div className="language-button"
                onClick={() => props.handleLanguage(language)}
                key={index}
            >
                <h5 className="language-text">{language}</h5>
            </div>
        )
    })

    // set up event listener for clicking outside of dropdowns
    useEffect(() => {
        function handleClickOutside(event) {
            if ((languageRef.current && !languageRef.current.contains(event.target))) {
                props.toggleLanguage()
            }
        }

        const timeoutId = setTimeout(() => {
            window.addEventListener("click", handleClickOutside)
        }, 200) // set delay to adding event listener bc card would close before opening

        return () => {
            clearTimeout(timeoutId)
            window.removeEventListener("click", handleClickOutside)
        }
    }, [props.showLanguage])



    return (
        <div className="language">
            <div className="language-container" ref={languageRef}>
                <h3 className="language-title">Languages</h3>
                <div className="language-grid-container">
                    {languageButtons}
                </div>

            </div>
        </div>

    )
}