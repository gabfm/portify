import { z } from "zod";

export const loginUserSchema = 
    z.object({
        email:
            z.string()
            .nonempty("O e-mail é obrigatório")
            .email("O e-mail fornecido é inválido"),
        password:
            z.string()
            .nonempty("A senha é obrigatória"),
    })

export type TloginFormValues = z.infer<typeof loginUserSchema>;