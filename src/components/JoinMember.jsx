import "../styles/JoinMember.css"

export default function JoinMember() {

    return (
        <div className="join-member">

            <h3 className="join-member-title">Join to become a member</h3>

            <p className="join-member-description">
                Earn points towards free nights. Sign up for free today.
            </p>

            <div className="join-member-container">
                <div className="join-member-button center">
                    <h3 className="join-member-button-title">Join Now</h3>
                </div>

                <div className="join-member-button center sign-up-button">
                    <h3 className="join-member-button-title">Sign In</h3>
                </div>
            </div>
        </div>
    )
}