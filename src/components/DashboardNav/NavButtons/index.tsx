import { StyledList } from "./style";

interface INavButtonsProps {
    setNav: React.Dispatch<React.SetStateAction<string>>;
    section: string;
    alt: string;
    title: string;
    image: string;
}

function NavButtons({setNav, section, alt, title, image}: INavButtonsProps){
    return (
        <StyledList onClick={() => setNav(`${section}`)}>
          <img src={image} alt={alt} />
          <p>{title}</p>
        </StyledList>
    )
}

export default NavButtons