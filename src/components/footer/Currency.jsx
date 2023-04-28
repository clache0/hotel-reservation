import { useRef, useEffect } from "react"
import CurrencyData from "../../assets/CurrencyData"

export default function Currency(props) {
    const currencyRef = useRef(null)

    // map currencys to buttons
    const currencyButtons = CurrencyData.map((currency, index) => {
        return (
            <div className="language-button"
                onClick={() => props.handleCurrency(currency)}
                key={index}
            >
                <h5 className="language-text">{currency}</h5>
            </div>
        )
    })

    // set up event listener for clicking outside of dropdowns
    useEffect(() => {
        function handleClickOutside(event) {
            if ((currencyRef.current && !currencyRef.current.contains(event.target))) {
                props.toggleCurrency()
            }
        }

        const timeoutId = setTimeout(() => {
            window.addEventListener("click", handleClickOutside)
        }, 200) // set delay to adding event listener bc card would close before opening

        return () => {
            clearTimeout(timeoutId)
            window.removeEventListener("click", handleClickOutside)
        }
    }, [props.showCurrency])

    return (
        <div className="language">
            <div className="language-container" ref={currencyRef}>
                <h3 className="language-title">Currencys</h3>
                <div className="language-grid-container">
                    {currencyButtons}
                </div>

            </div>
        </div>

    )
}