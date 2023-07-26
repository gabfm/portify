import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z.string().nonempty("O nome é obrigatório."),
    email: z
      .string()
      .nonempty("O email é obrigatório.")
      .email("Digite um email válido."),
    password: z
      .string()
      .nonempty("A senha é obrigatória.")
      .min(8, "A senha precisa ter, no mínimo, 8 caracteres.")
      .regex(
        /(?=.*?[A-Z])/,
        "A senha precisa ter pelo menos uma letra maiúscula."
      )
      .regex(
        /(?=.*?[a-z])/,
        "A senha precisa ter pelo menos uma letra minúscula."
      )
      .regex(/(?=.*?[0-9])/, "A senha precisa ter pelo menos um número.")
      .regex(
        /(?=.*?[#?!@$%^&*-])/,
        "A senha precisa ter pelo menos um caractere especial."
      ),
    confirm_password: z.string().nonempty("Confirme a senha."),
  })
  .refine(({ password, confirm_password }) => password === confirm_password, {
    message: "As senhas não correspondem.",
    path: ["confirm_password"],
  });

export type TRegisterFormValues = z.infer<typeof registerFormSchema>;