import { IProjects } from "../../providers/PortfolioContext/@types";
import Github from "../../assets/github.svg";
import Link from "../../assets/link.svg";
import { StyledTitle3 } from "../../styles/typography";
import { StyledProjectImg, StyledLinks, StyledList, StyledProjectInfo, StyledProjectContainer } from "./style";

interface IProjectItemProps {
  project: IProjects;
}

function ProjectItem({ project }: IProjectItemProps) {
  return (
    <StyledList>
      <StyledProjectContainer>
        {project.coverUrl ? (
      <StyledProjectImg>
            <img
              src={project.coverUrl}
              alt={`Imagem do projeto ${project.name}`}
            />
      </StyledProjectImg>
        ) : null}

      <StyledProjectInfo>
        <StyledTitle3>{project.name}</StyledTitle3>
        <p>{project.description}</p>
      </StyledProjectInfo>
      </StyledProjectContainer>

      <StyledLinks>
        {project.repository ? <a href={project.repository}><img src={Github} alt="Acesse o repositório do projeto" /></a> : null}
        {project.link ? <a href={project.link}><img src={Link} alt="Acesse o projeto" /></a> : null}
      </StyledLinks>
    </StyledList>
  );
}

export default ProjectItem;