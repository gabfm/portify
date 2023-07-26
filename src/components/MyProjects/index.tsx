import { useState, useEffect } from "react";
import AddButton from "../../assets/add_circle.png";
import Modal from "../Modal";

import {
  StyledMyProjectButton,
  StyledMyProjectHeader,
  StyledMyProjectList,
  StyledMyProjectsContainer,
} from "./style";
import { IProjects } from "../../providers/PortfolioContext/@types";
import { StyledRobotoP } from "../../styles/typography";
import MyProjectItem from "../MyProjectItem";

function MyProjects() {
  const [projects, setProjects] = useState<IProjects[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProjectId, setEditProjectId] = useState<number | null>(null);

  useEffect(() => {
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
      try {
        const parsedProjects = JSON.parse(storedProjects);
        if (Array.isArray(parsedProjects)) {
          setProjects(parsedProjects);
        }
      } catch (error) {
        console.log("Error parsing projects from localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    try {
      const projectsString = JSON.stringify(projects);
      localStorage.setItem("projects", projectsString);
    } catch (error) {
      console.log("Error serializing projects to localStorage:", error);
    }
  }, [projects]);

  const handleProject = (projectId: number | undefined) => {
    const updatedProjects = projects.filter((project) => project.id !== projectId);
    setProjects(updatedProjects);
  };

  const handleAddProject = (project: IProjects) => {
    if (editProjectId) {
      const updatedProjects = projects.map((p) => {
        if (p.id === editProjectId) {
          return { ...p, ...project };
        }
        return p;
      });
      setProjects(updatedProjects);
      setEditProjectId(null);
    } else {
      const newProject: IProjects = { ...project, id: projects?.length + 1 };
      setProjects([...(projects ?? []), newProject]);
    }
    setIsModalOpen(false);
  };

  const handleEditProject = (projectId: number | undefined) => {
    const project = projects.find((p) => p.id === projectId);
    if (project) {
      setEditProjectId(Number(projectId));
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <StyledMyProjectsContainer>
        <StyledMyProjectHeader>
          <h1>Meus projetos</h1>
          <StyledMyProjectButton onClick={() => setIsModalOpen(true)}>
            <img
              src={AddButton}
              alt="circulo com + ao meio que representa a adição de projetos"
            />
            <p>Adicionar projeto</p>
          </StyledMyProjectButton>
        </StyledMyProjectHeader>
        <StyledMyProjectList>
          {projects?.length > 0 ? (
          <ul>
            {projects.map((project) => (
                <MyProjectItem key={project.id} project={project} handleEditProject={handleEditProject} handleProject={handleProject}/>
            ))}
              </ul>
          ) : (
            <StyledRobotoP className="noProjectParagraph">Nenhum projeto encontrado</StyledRobotoP>
          )}
        </StyledMyProjectList>
      </StyledMyProjectsContainer>
      {isModalOpen && (
        <Modal
          title={editProjectId ? "Editar Projeto" : "Adicionar Projeto"}
          onAdd={handleAddProject}
          onClose={() => {
            setIsModalOpen(false);
            setEditProjectId(null);
          }}
        />
      )}
    </>
  );
}

export default MyProjects;