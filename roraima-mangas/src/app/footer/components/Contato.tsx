"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faInstagram, faYoutube, faPinterest } from "@fortawesome/free-brands-svg-icons";

export default function Contato() {
    return (
        <div>
            <h2 className="font-semibold text-[20px] uppercase">Contato</h2>
            <div className="text-[20px] flex gap-4 mt-4 items-center">
                <FontAwesomeIcon icon={faSquareFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faYoutube} />
                <FontAwesomeIcon icon={faPinterest} />
            </div>
        </div>
    )
}