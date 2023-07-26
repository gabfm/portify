import { IProjects } from "../../providers/PortfolioContext/@types";
import delButton from "../../assets/delete_project.png";
import editButton from "../../assets/edit_project.png";
import { StyledMontserratP, StyledTitle3 } from "../../styles/typography";
import { StyledButtonsContainer, StyledList } from "./style";

interface IMyProjectItemProps {
    project: IProjects;
    handleEditProject: (projectId: number | undefined) => void
    handleProject: (projectId: number | undefined) => void
}

function MyProjectItem({project, handleEditProject, handleProject}: IMyProjectItemProps) {
  return (
    <StyledList>
      <div className="rigth_container">
        <img className="cover_img" src={project.coverUrl} alt="" />
        <div className="info_container">
          <StyledTitle3>{project.name}</StyledTitle3>
          <StyledMontserratP>{project.description}</StyledMontserratP>
        </div>
      </div>
      <StyledButtonsContainer>
        <button onClick={() => handleEditProject(project.id)}>
          <img src={editButton} alt="" />
        </button>
        <button onClick={() => handleProject(project.id)}>
          <img src={delButton} alt="" />
        </button>
      </StyledButtonsContainer>
    </StyledList>
  );
}

export default MyProjectItem;