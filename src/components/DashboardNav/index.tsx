import { StyledNav } from "./style";
import home from "../../assets/home.png"
import profileinfo from "../../assets/profile.png"
import projects from "../../assets/projects.png"
import NavButtons from "./NavButtons";

interface IDashboardNavProps {
    setNav: React.Dispatch<React.SetStateAction<string>>;
}

function DashboardNav({setNav}: IDashboardNavProps) {
  return (
    <StyledNav>
      <ul>
        <NavButtons setNav={setNav} image={home} section="home" alt="Início da dashboard" title="Início"/>
        <NavButtons setNav={setNav} image={profileinfo} section="profileinfo" alt="Informações do perfil" title="Informações do perfil"/>
        <NavButtons setNav={setNav} image={projects} section="projects" alt="Meus projetos" title="Meus projetos"/>
      </ul>
    </StyledNav>
  );
}

export default DashboardNav;