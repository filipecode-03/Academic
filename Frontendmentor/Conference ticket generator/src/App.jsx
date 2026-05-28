import Intro from "./components/Intro";
import Form from "./components/Form";
import Ticket from './components/Ticket'
import grade from '../public/images/pattern-lines.svg'
import lineTop from '../public/images/pattern-squiggly-line-top.svg'
import lineBottomMobile from '../public/images/pattern-squiggly-line-bottom-mobile-tablet.svg';
import { useState } from "react";
import logoFull from '../public/images/logo-full.svg'


function App() {

    const [ticketGenerated, setTicketGenerated] = useState(false);
    const [userData, setUserData] = useState(null);

    return (
        <main className="relative text-white font-['Inconsolata'] overflow-hidden">
            <img src={lineTop} alt="line-top" className="absolute top-10 right-0 w-40"/>
            <img src={grade} alt="grade" className="absolute"/>
            <img src={lineBottomMobile} alt="line-bottom" className="absolute bottom-0 w-90 left-0 z-0"/>
            <img src={logoFull} alt="logo" className="mx-auto mt-10"/>
            {/* Conteúdo */}
            {
                !ticketGenerated ? (
                    <div className="relative z-10">
                        <Intro />
                        <Form setTicketGenerated={setTicketGenerated} setUserData={setUserData} />
                    </div>
                ) : (
                    <Ticket userData={userData} />
                )
            }
        </main>
    );
}

export default App;