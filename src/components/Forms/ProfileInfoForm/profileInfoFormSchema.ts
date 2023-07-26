import { z } from "zod";

export const profileInfoFormSchema = z
  .object({
    color: z.string().optional(),
    position: z.string().optional(),
    description: z.string().optional(),
  })

export type TProfileInfoFormValues = z.infer<typeof profileInfoFormSchema>;