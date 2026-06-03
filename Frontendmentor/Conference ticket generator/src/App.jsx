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
        <main className="relative min-h-screen text-white font-['Inconsolata'] overflow-hidden">
            <img src={lineTop} alt="line-top" className="absolute top-10 right-0 w-40"/>
            <img src={grade} alt="grade" className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-445 h-auto pointer-events-none"/>            
            <img src={lineBottomMobile} alt="line-bottom" className="absolute bottom-0 w-90 left-0 z-0"/>
            <img src={logoFull} alt="logo" className="mx-auto mt-10"/>
            {/* Conteúdo */}
            {
                !ticketGenerated ? (
                    <div className="relative z-10 min-h-screen">
                        <Intro />
                        <Form setTicketGenerated={setTicketGenerated} setUserData={setUserData} />
                    </div>
                ) : (
                    <div className="relative z-10 min-h-screen">
            <Ticket userData={userData} />
        </div>
                )
            }
        </main>
    );
}

export default App;