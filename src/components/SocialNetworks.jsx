import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialNetworks.sass";

const socialNetworks = [
    { href: "https://www.linkedin.com/in/mayconnascioliveira", name: "linkedin", icon: <FaLinkedinIn /> },
    { href: "https://github.com/Maycon-crz", name: "github", icon: <FaGithub /> },
    { href: "https://www.instagram.com/maycondesenvolvedor", name: "instagram", icon: <FaInstagram /> },
];

const SocialNetworks = () => {
    return (
        <section id="social-networks">
          {socialNetworks.map((network) => (
            <a href={network.href} target="_blank" className="social-btn" id={network.name} key={network.name}>
              {network.icon}
            </a>
          ))}
        </section>
      );
}
export default SocialNetworks