import { StyledCreatePortfolioButton, StyledForm } from "./style";
import {
  TProfileInfoFormValues,
  profileInfoFormSchema,
} from "./profileInfoFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { PortfolioContext } from "../../../providers/PortfolioContext/PortfolioContext";
import Select from "../../Select";
import Input from "../../Input";
import TextArea from "../../TextArea";

function ProfileInfoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProfileInfoFormValues>({
    resolver: zodResolver(profileInfoFormSchema),
  });

  const { portfolio, createPortfolio, updatePortfolio } = useContext(PortfolioContext)

  function submit(data: TProfileInfoFormValues) {
    if (portfolio.length > 0 ) {
      updatePortfolio(data)
    } else {
      const newData = {
        userId: JSON.parse(localStorage.getItem("@USERID") || ""),
        color: data.color,
        position: data.position,
        description: data.description
      }
      createPortfolio(newData)
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)} noValidate>
      <Select id="colorMode" label="Modo de Cor" error={errors.color} {...register("color")}>
        <option value="" hidden>
          Escolha o modo
        </option>
        <option value="light">Claro</option>
        <option value="dark">Escuro</option>
      </Select>
      <Input
        id="position"
        label="Cargo"
        type="text"
        placeholder="Cargo"
        error={errors.position}
        {...register("position")}
      />
      {errors.position ? errors.position.message : null}
      <TextArea
      label="Descrição"
        id="description"
        placeholder="Descrição"
        error={errors.description}
        {...register("description")}
      ></TextArea>
      <StyledCreatePortfolioButton>
        {portfolio.length > 0 ? "Atualizar portfólio" : "Criar portfólio"}
        </StyledCreatePortfolioButton>
    </StyledForm>
  );
}

export default ProfileInfoForm;