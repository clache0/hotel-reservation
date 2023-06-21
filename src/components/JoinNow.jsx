import { Link } from "react-router-dom";
import Back from "./Back";
import { useState } from "react"

export default function JoinNow(props) {
    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const[email, setEmail] = useState('')
    const[passwordValues, setPasswordValues] = useState({
        password: '',
        showPassword: false,
    })
    const[isRemember, setIsRemember] = useState(false)

    function handleClickShowPassword() {
        setPasswordValues({...passwordValues, showPassword: !passwordValues.showPassword})
    }

    function handlePasswordChange(event) {
        setPasswordValues({...passwordValues, password: event.target.value})
    }

    function onSubmit(event) {
        event.preventDefault()

        // console.log("firstName: ", firstName)
        // console.log("lastName: ", lastName)
        // console.log("email: ", email)
        // console.log("password: ", passwordValues.password)
        // console.log("isRemember: ", isRemember ? "true" : "false")

        setFirstName('')
        setLastName('')
        setEmail('')
        setPasswordValues({
            password: '',
            showPassword: false,
        })
        setIsRemember('')
    }

    return (
        <div className="join-now">
            <Back />

            <img src="https://i.imgur.com/FU5CQgS.jpg" alt="" 
                className="join-now-image"
            />

            <form onSubmit={onSubmit} className="join-now-form">
                <h3 className="join-now-title">Hi, welcome!</h3>
                <p className="join-now-description">Enter your information below to register.</p>

                <div className="input-text-container">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        required='required'
                        type='text'
                        className="form-input-box"
                        id='firstName'
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                </div>

                <div className="input-text-container">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        required='required'
                        type='text'
                        className="form-input-box"
                        id='lastName'
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                </div>

                <div className="input-text-container">
                    <label htmlFor="email">Email</label>
                    <input 
                        required='required'
                        type='text'
                        className="form-input-box"
                        id='email'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div className="input-text-container">
                    <label htmlFor="password">Password</label>
                    <input 
                        required='required'
                        type={passwordValues.showPassword ? "text" : "password"}
                        className="form-input-box"
                        id='password'
                        value={passwordValues.password}
                        onChange={handlePasswordChange}
                    />
                    <button onClick={handleClickShowPassword}
                        className="show-password-button"
                    >
                        {passwordValues.showPassword ? 'Hide' : 'Show'} Password
                    </button>
                </div>

                <div className="remember-forgot-container">
                    <div className="remember-container">
                        <input 
                            type='checkbox'
                            className="form-checkbox"
                            id='isRemember'
                            // value="Remember Me"
                            checked={isRemember}
                            onChange={() => setIsRemember(!isRemember)}
                        />
                        <label htmlFor="isRemember">Remember Me</label>
                    </div>

                    <Link to="/under-construction"
                        className="forgot-password">
                        Forgot password?
                    </Link>
                </div>

                <button type='submit' className="submit-button">
                    Sign Up
                </button>

            </form>
        </div>
    )
}