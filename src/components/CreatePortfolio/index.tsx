import { useContext } from "react"
import { PortfolioContext } from "../../providers/PortfolioContext/PortfolioContext"
import { StyledBox, } from "./styled"
import { StyledRobotoP, StyledTitle3 } from "../../styles/typography";
import { StyledSolidButton } from "../../styles/buttons";

interface ICreatePortfolioProps {
    setNav: React.Dispatch<React.SetStateAction<string>>;
}

function CreatePortfolio({ setNav }: ICreatePortfolioProps) {

    const { portfolio } = useContext(PortfolioContext)

    return (
        <StyledBox>
            {portfolio.length > 0 ? (
                <>
                <StyledTitle3>Seu porfólio está online</StyledTitle3>
                <StyledRobotoP>Acesse em</StyledRobotoP>
                <a href={`/portfolio/${portfolio[0]?.id}`} target="a_blank"><StyledTitle3>www.portify.com.br/portfolio/{portfolio[0]?.id}</StyledTitle3></a>
                </>
            ) : (
              <>
                <StyledRobotoP>Seu portfólio ainda não está publicado</StyledRobotoP>
                <StyledSolidButton onClick={() => setNav("profileinfo")}>
                  Publicar portfólio
                </StyledSolidButton>
              </>
            )}
        </StyledBox>
    )
}

export default CreatePortfolio;