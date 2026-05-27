import Intro from "./components/Intro";
import Form from "./components/Form";
import grade from '../public/images/pattern-lines.svg'
import lineTop from '../public/images/pattern-squiggly-line-top.svg'
import lineBottomMobile from '../public/images/pattern-squiggly-line-bottom-mobile-tablet.svg';

function App() {
    return (
        <main className="relative text-white font-['Inconsolata'] overflow-hidden">
            <img src={lineTop} alt="line-top" className="absolute top-10 right-0 w-40"/>
            <img src={grade} alt="grade" className="absolute"/>
            <img src={lineBottomMobile} alt="line-bottom" className="absolute bottom-0 w-90 left-0 z-0"/>
            {/* Conteúdo */}
            <div className="relative z-10">
                <Intro />
                <Form />
            </div>
        </main>
    );
}

export default App;