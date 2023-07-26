import Logo from "../../assets/portify-colored.svg"
import { StyledHeader, StyledHeaderContainer } from "./style";

function HeaderPortfolio() {
    return(
        <StyledHeader>
            <StyledHeaderContainer maxwidth={"1330px"}>
                <img src={Logo} alt="Portify" />
            </StyledHeaderContainer>
        </StyledHeader>
    )
}

export default HeaderPortfolio