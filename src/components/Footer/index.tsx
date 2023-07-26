import Logo from "../../assets/portify-black.svg"
import { StyledRobotoP } from "../../styles/typography"
import { StyledFooter } from "./style"


function Footer() {
    return (
        <StyledFooter maxwidth={"1330px"}>
            <div>
            <img src={Logo} alt="Portify" />
            <StyledRobotoP>Todos os direitos reservados  - Kenzie Academy Brasil</StyledRobotoP>
            </div>
        </StyledFooter>
    )
}

export default Footer