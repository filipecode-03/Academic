import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import BackProject from './BackProject';
import { useState } from 'react';

function Main() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);

    return (
        <main className="absolute z-10 top-85 px-10">
            <SectionOne setIsModalOpen={setIsModalOpen} setSelectedCard={setSelectedCard} />
            <SectionTwo />
            <SectionThree setIsModalOpen={setIsModalOpen} setSelectedCard={setSelectedCard} />
            {isModalOpen && (
                <BackProject setSelectedCard={setSelectedCard} />
            )}
        </main>
    )
}

export default Main 