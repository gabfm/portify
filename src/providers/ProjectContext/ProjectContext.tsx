import { createContext, useContext, useEffect, useState } from "react"
import { api } from "../../services/api";
import { IProject, IProjectContext, IProjects } from "./@type";

import { PortfolioContext } from "../PortfolioContext/PortfolioContext";

export const ProjectContext = createContext({} as IProjectContext)
export const ProjectProvider = ({children}: IProject) => {
    const { portfolio } = useContext(PortfolioContext);
    const [projectList, setProjectList] = useState<IProjects[]>([]);
  
  
        useEffect(() => {
            const loadProject = async () => {
              try {
                if (portfolio !== undefined && portfolio.length > 0) {
                  const { data } = await api.get(`/portfolios/${portfolio[0].id}/projects/`);
                  setProjectList(data);
                }
              } catch (error) {
                console.log(error);
              }
            };
        
            loadProject();
          }, [portfolio]);
  
    const createProject = async (formData: IProjects) => {
      if (portfolio && portfolio.length > 0) {
        const newData = {
          ...formData,
          portfolioId: portfolio[0].id,
        };
  
        try {
          const token = localStorage.getItem("@TOKEN");
          await api.post("/projects", newData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
        } catch (error) {
          console.log(error);
        }
      }
    };
  
    return (
      <ProjectContext.Provider value={{ projectList, createProject }}>
        {children}
      </ProjectContext.Provider>
    );
  };
  