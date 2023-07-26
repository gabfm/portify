import { useContext } from "react";
import { StyledTitle2 } from "../../styles/typography";
import ProfileInfoForm from "../Forms/ProfileInfoForm";
import { StyledHeaderInfo, StyledMain } from "./style";
import { UserContext } from "../../providers/UserContext/UserContext";

function ProfileInfo() {
    const { user } = useContext(UserContext);

  return (
    <StyledMain maxwidth="645px">
      <StyledTitle2>Informações no perfil:</StyledTitle2>
      <StyledHeaderInfo>
        <div>
          <span>Nome:</span>
          <p>{user?.name}</p>
        </div>
        <div>
          <span>E-mail:</span>
          <p>{user?.email}</p>
        </div>
      </StyledHeaderInfo>
      <ProfileInfoForm/>
    </StyledMain>
  );
}

export default ProfileInfo;