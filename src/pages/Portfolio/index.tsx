import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import { useContext, useEffect } from "react";
import { PortfolioContext } from "../../providers/PortfolioContext/PortfolioContext";
import HeaderPortfolio from "../../components/HeaderPortfolio";
import {
  StyledSpan,
  StyledTitle1,
  StyledTitle2,
} from "../../styles/typography";
import { IProjects } from "../../providers/PortfolioContext/@types";
import ProjectItem from "../../components/ProjectItem";
import { darkTheme, lightTheme } from "../../styles/themes";
import { ThemeProvider } from "styled-components";
import {
  StyledUserSection,
  StyledMainContainer,
  StyledPortfolioContainer,
  StyledThemeContainer,
  StyledProjectsSection,
  StyledUserInfo,
} from "./style";

function Portfolio() {
  const { id } = useParams();

  const { currentPortfolio, loadPortfolio, portfolioTheme } =
    useContext(PortfolioContext);

  useEffect(() => {
    loadPortfolio(`${id}`);
    document.title = "Portify | Portfólio";
  }, []);

  return (
    <ThemeProvider theme={portfolioTheme === "dark" ? darkTheme : lightTheme}>
      <StyledThemeContainer>
        <HeaderPortfolio />
        <StyledPortfolioContainer maxwidth={"1330px"}>
          <main>
            <StyledMainContainer>
              <StyledUserSection>
                <StyledUserInfo>
                  <StyledTitle1>{currentPortfolio?.user?.name}</StyledTitle1>
                  <StyledSpan>{currentPortfolio?.position}</StyledSpan>
                </StyledUserInfo>
                <div>
                  <p>{currentPortfolio?.description}</p>
                </div>
              </StyledUserSection>
              <StyledProjectsSection>
                <StyledTitle2>Meus Projetos</StyledTitle2>
                {currentPortfolio?.projects != null ? (
                  <ul>
                    {currentPortfolio.projects.map((project: IProjects) => {
                      return <ProjectItem key={project.id} project={project} />;
                    })}
                  </ul>
                ) : null}
              </StyledProjectsSection>
            </StyledMainContainer>
          </main>
        </StyledPortfolioContainer>
        <Footer />
      </StyledThemeContainer>
    </ThemeProvider>
  );
}

export default Portfolio;