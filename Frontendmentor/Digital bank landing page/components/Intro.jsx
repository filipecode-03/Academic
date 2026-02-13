import phone from '../src/assets/images/image-mockups.png'

function Intro() {
    return (
        <header style={{
            backgroundColor: "#FAFAFA",
            backgroundImage: `url("../src/assets/images/bg-intro-mobile.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: ""}}>
                <img src={phone} alt="phone" />
                <div>
                    <h1>Next generation digital banking</h1>
                    <p>Take your financial life online. Your Digitalbank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <button>Request Invite</button>
                </div>
        </header>
    )
}

export default Intro