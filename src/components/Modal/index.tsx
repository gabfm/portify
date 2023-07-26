import { useContext, useState, ChangeEvent } from "react";
import imgClose from "../../assets/Vector.png";
import { StyledModal, StyledButton } from "./style";
import { IProjects } from "../../providers/PortfolioContext/@types";
import { ProjectContext } from "../../providers/ProjectContext/ProjectContext";
import Input from "../Input";
import { StyledTitle2 } from "../../styles/typography";

interface ModalProps {
  title: string;
  onClose: () => void;
  onAdd: (project: IProjects) => void;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, onAdd }) => {
  const { createProject } = useContext(ProjectContext);
  const [projectData, setProjectData] = useState<IProjects>({
    name: "",
    description: "",
    repository: "",
    link: "",
    coverUrl: "",
  });
  const [error, setError] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProjectData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleForm = () => {
    if (!projectData.name || !projectData.description || !projectData.repository) {
      setError("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    createProject(projectData);
    onAdd(projectData);
    setError("");
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <StyledModal>
      <div className="divContainer">
        <div className="divTitle">
          <StyledTitle2>{title}</StyledTitle2>
          <div>
            <img src={imgClose} alt="Icone para fechar modal" onClick={handleClose} />
          </div>
        </div>

        <div className="inputContainer">
          <Input
            type="text"
            name="name"
            placeholder="Nome"
            value={projectData.name}
            onChange={handleInputChange}
            required 
          />
          <Input
            type="text"
            name="description"
            placeholder="Descrição resumida"
            value={projectData.description}
            onChange={handleInputChange}
            required 
          />
          <Input
            type="text"
            name="repository"
            placeholder="Repositório"
            value={projectData.repository}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="link"
            placeholder="Link do deploy"
            value={projectData.link}
            onChange={handleInputChange}
            required 
          />
          <Input
            type="text"
            name="coverUrl"
            placeholder="URL da imagem (opcional)"
            value={projectData.coverUrl}
            onChange={handleInputChange}
          />
        </div>

        {error ? <p>{error}</p> : null}

        <div className="divContainerBts">
          <StyledButton onClick={handleForm}>{title}</StyledButton>
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;