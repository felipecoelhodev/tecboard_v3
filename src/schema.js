import * as z from "zod";

export const eventSchema = z.object({
  name: z
    .string()
    .trim()
    .min(4, { message: "Nome inválido! Preencha corretamente" }),
  date: z.coerce.date({ message: "Data inválida!" }),
  theme: z.string().min(1, { message: "Selecione um tema!" }),
});
