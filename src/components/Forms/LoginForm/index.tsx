import { useContext } from "react";
import { useForm } from "react-hook-form"
import { UserContext } from "../../../providers/UserContext/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { TloginFormValues, loginUserSchema, } from "./loginUserSchema";
import Input from "../../Input";
import { StyledRobotoP, StyledTitle1 } from "../../../styles/typography";
import { StyledForm, StyledContainerBtns, StyledLoginButton, StyledLoginLinkOutline, StyledFormHeader } from "./style";



function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<TloginFormValues>({
        resolver: zodResolver(loginUserSchema)
    });

    const { userLogin } = useContext(UserContext);

    function submit(formData: TloginFormValues) {
        userLogin(formData);
    }

    return (
        <StyledForm onSubmit={handleSubmit(submit)}>
            <StyledFormHeader>
            <StyledTitle1>Login</StyledTitle1>
            <StyledRobotoP>Acesse o portfólio</StyledRobotoP>
            </StyledFormHeader>

            <fieldset>
            <Input
                type="email"
                placeholder="E-mail"
                {...register("email")}
                error={errors.email}
            />

            <Input
                type="password"
                placeholder="Senha"
                {...register("password")}
                error={errors.password}
            />
            </fieldset>
            
            <StyledContainerBtns>
            <StyledLoginButton>Entrar</StyledLoginButton>
            <StyledRobotoP>Não possui cadastro?</StyledRobotoP>
            <StyledLoginLinkOutline to="/register">Cadastre-se
            </StyledLoginLinkOutline>
            </StyledContainerBtns>
        </StyledForm>
    )
}

export default LoginForm;