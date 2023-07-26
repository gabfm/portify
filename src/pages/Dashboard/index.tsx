import { useState, useContext, useEffect } from "react";
import { PortfolioContext } from "../../providers/PortfolioContext/PortfolioContext";
import { UserContext } from "../../providers/UserContext/UserContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  StyledDashboardHeader,
  StyledMain,
} from "./style";
import DashboardNav from "../../components/DashboardNav";
import { StyledRobotoP, StyledTitle2 } from "../../styles/typography";
import { StyledPageContainer } from "../../styles/grid";
import CreatePortfolio from "../../components/CreatePortfolio";
import ProfileInfo from "../../components/ProfileInfo";
import MyProjects from "../../components/MyProjects";
import { StyledOutline2Button } from "../../styles/buttons";

function Dashboard() {
  const { searchPortfolio } = useContext(PortfolioContext);
  const { user, userLogout } = useContext(UserContext);

  const [nav, setNav] = useState("home");

  useEffect(() => {
    searchPortfolio();
    document.title = "Portify | Dashboard";
  }, []);


  return (
    <StyledPageContainer>
      <div>
        <Header>
            <div>
            <StyledRobotoP>{user?.name}</StyledRobotoP>
            <StyledOutline2Button onClick={() => userLogout()}>
              Sair
            </StyledOutline2Button>
            </div>
        </Header>

        <StyledMain maxwidth={"1330px"}>
          <StyledDashboardHeader>
            <StyledTitle2>
              Seja bem vindo: <span>{user?.name}</span>
            </StyledTitle2>

            <StyledRobotoP>Selecione uma das opções abaixo</StyledRobotoP>

            <DashboardNav setNav={setNav} />
          </StyledDashboardHeader>

          <section>
            {nav === "home" ? (
              <CreatePortfolio setNav={setNav} />
            ) : null}
            {nav === "profileinfo" ? <ProfileInfo /> : null}
            {nav === "projects" ? <MyProjects /> : null}
            
          </section>
        </StyledMain>
      </div>

      <Footer />
    </StyledPageContainer>
  );
}

export default Dashboard;