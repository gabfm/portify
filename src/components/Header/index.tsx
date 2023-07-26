import { Link } from "react-router-dom";
import Logo from "../../assets/portify-white.svg"
import { StyledChildrenContainer, StyledHeader, StyledHeaderContainer } from "./style";

interface IHeaderProps{
    children: React.ReactNode;
}

function Header({children}: IHeaderProps) {
    return(
        <StyledHeader>
            <StyledHeaderContainer maxwidth={"1330px"}>
                <Link to="/"><img src={Logo} alt="Portify" /></Link>
                <StyledChildrenContainer>
                    {children}
                </StyledChildrenContainer>
            </StyledHeaderContainer>
        </StyledHeader>
    )
}

export default Header