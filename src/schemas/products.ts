import { z } from "zod"

const productsSchema = z.object({
    name: z.string({
        invalid_type_error: "El nombre debe ser de tipo STRING",
        required_error: "El nombre es requerido"
    }).min(3, { message: "El nombre tiene que tener como MÍNIMO 3 caracteres" }),
    description: z.string({
        invalid_type_error: "La descripción debe ser de tipo STRING",
        required_error: "La descripción es requerida"
    }).min(1, { message: "La descripción tiene que tener como MÍNIMO 1 caracter" })
        .max(255, { message: "La descripción tiene que tener como MÁXIMO 255 caracteres" })
})

export function validateProduct(data) {
    return productsSchema.safeParse(data)
}