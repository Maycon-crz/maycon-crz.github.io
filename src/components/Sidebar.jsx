import Avatar from "/img/eu_estilizado.png";
import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

import "../styles/components/sidebar.sass";


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <p>imagem</p>
      <img src={Avatar} alt="" srcSet="" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />      
    </aside>
  )
}

export default Sidebar