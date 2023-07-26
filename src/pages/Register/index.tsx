import { useEffect } from "react"
import Return from "../../assets/return.svg"
import RegisterForm from "../../components/Forms/RegisterForm";
import { StyledMain, StyledRegisterLink } from "./style";
import { StyledRobotoP, StyledTitle1 } from "../../styles/typography";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { StyledLink, StyledLinkButton } from "../../styles/buttons.ts";
import { StyledPageContainer } from "../../styles/grid.ts";


function Register() {
    useEffect(() => {
        document.title = "Portify | Cadastro";
    }, [])

    return (
        <StyledPageContainer>
            <Header>
                <StyledLink className="RegisterButton" to="/register">Cadastre-se</StyledLink>
                <StyledLinkButton to="/login">Acesse seu Portfólio</StyledLinkButton>
            </Header>
            <StyledMain maxwidth={"1100px"}>
                <StyledRegisterLink to="/">
                    <img src={Return} alt="Voltar para a Home" />
                    Voltar
                </StyledRegisterLink>

                <StyledTitle1>Cadastre-se</StyledTitle1>
                <StyledRobotoP>Preencha os campos abaixo para criar uma conta</StyledRobotoP>

                <RegisterForm />
            </StyledMain>
            <Footer />
        </StyledPageContainer>
    )
}

export default Register