import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TRegisterFormValues, registerFormSchema } from "./registerFormSchema";
import { StyledForm, StyledRegisterButton } from "./style";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext/UserContext";
import Input from "../../Input";

const RegisterForm = function () {

  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
  });

  function submit(formData: TRegisterFormValues) {
    userRegister(formData);
    reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)} noValidate>
      <div>
        <Input placeholder="Nome" type="text" error={errors.name} {...register("name")} />

        <Input placeholder="E-mail" type="email" error={errors.email} {...register("email")} />

        <Input placeholder="Senha" type="password" error={errors.password} {...register("password")} />

        <Input
          placeholder="Confirmar Senha"
          type="password" error={errors.confirm_password}
          {...register("confirm_password")}
        />
      </div>
      <StyledRegisterButton>Cadastre-se</StyledRegisterButton>
    </StyledForm>
  );
};

export default RegisterForm;