import { StyledContainerBtns, StyledContainerImg, StyledContainerMain, StyledHomeLink, StyledHomeLinkOutline, StyledMain, StyledPortifyInfo } from "./styled.ts";
import imgHome from "../../assets/home-img.png"
import portifyColoredLogo from "../../assets/portify-colored.svg";
import Footer from "../../components/Footer/index.tsx";
import Header from "../../components/Header/index.tsx";
import { StyledLink, StyledLinkButton } from "../../styles/buttons.ts";
import { StyledPageContainer } from "../../styles/grid.ts";
import { StyledRobotoP, StyledTitle1 } from "../../styles/typography.ts";


function Home() {

    return (
        <StyledPageContainer>
        <Header>
                <StyledLink className="RegisterButton" to="/register">Cadastre-se</StyledLink>
                <StyledLinkButton to="/login">Acesse seu Portfólio</StyledLinkButton>
        </Header>

            <StyledMain maxwidth="1150px">
                <StyledContainerMain>
                    <StyledPortifyInfo>
                    <img src={portifyColoredLogo} alt="Portify" />
                    <StyledTitle1>Crie seu portfólio online </StyledTitle1>
                    <StyledRobotoP>Crie um portfólio para você em minutos</StyledRobotoP>
                    </StyledPortifyInfo>
                    <StyledContainerBtns>
                            <StyledHomeLink to="register">Cadastre-se</StyledHomeLink>
                        <StyledRobotoP>ou</StyledRobotoP>
                        <StyledHomeLinkOutline to="/login">Acesse seu Portfólio</StyledHomeLinkOutline>

                    </StyledContainerBtns>
                </StyledContainerMain>

                <StyledContainerImg>
                    <img src={imgHome} alt="" />
                </StyledContainerImg>
            </StyledMain>
            <Footer />
            </StyledPageContainer>
    );
}
export default Home;