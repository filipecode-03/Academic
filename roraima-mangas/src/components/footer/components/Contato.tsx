"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

export default function Contato() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold uppercase">Contato</h2>
      <div className="mt-4 flex items-center gap-4 text-[20px]">
        <FontAwesomeIcon icon={faSquareFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faPinterest} />
      </div>
    </div>
  );
}
