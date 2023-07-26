import LoginForm from "../../components/Forms/LoginForm";
import { StyledMain } from "./style";

import pictureLogin from "../../assets/pictureLogin.png"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StyledLink, StyledLinkButton } from "../../styles/buttons.ts";
import { StyledPageContainer } from "../../styles/grid.ts";
import { useEffect } from "react";

function Login() {
    useEffect(() => {
        document.title = "Portify | Login";
    }, [])

    return (
        <StyledPageContainer>
            <Header>
                <StyledLink className="RegisterButton" to="/register">Cadastre-se</StyledLink>
                <StyledLinkButton to="/login">Acesse seu Portfólio</StyledLinkButton>
            </Header>
            <StyledMain maxwidth="1150px">
                    <LoginForm />
                    <img src={pictureLogin} alt="Homem segurando um tablet e lendo" />
            </StyledMain>
            <Footer />
        </StyledPageContainer>
    )
}

export default Login;