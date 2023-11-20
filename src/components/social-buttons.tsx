import { faGithub, faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


import Link from "next/link";
import IconButtonLink from "./icon-button-link";

function SocialButtons() {
    return (
        <div className="flex gap-2 items-center">
            <IconButtonLink title="LinkedIn" href="https://linkedin.com/in/jatkindev" icon={FaLinkedinIn}></IconButtonLink>
            <IconButtonLink title="GitHub" href="https://github.com/jmdatkin" icon={FaGithub}></IconButtonLink>
            <IconButtonLink title="E-mail" href="mailto:jatkindev@gmail.com" icon={IoIosMail}></IconButtonLink>
        </div>
    );
}

export default SocialButtons;