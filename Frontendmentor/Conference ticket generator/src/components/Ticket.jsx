import logoMark from '../../public/images/logo-mark.svg'

function Ticket() {
    return (
        <div>
            <h1>Congrats, [nome do usuario]! Your ticket is ready.</h1>
            <p>We've emailed your ticket to [email do usuario] and will send updates in teh run up to the event.</p>
            <div className="bg-[url('../../public/images/pattern-ticket.svg')]">
                <img src={logoMark} alt="logo Mark" />
            </div>
        </div>
    )
}

export default Ticket