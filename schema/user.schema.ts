import z from "zod"

const createUserSchema = z.object({
    body : z.object({
        email : z.string(),
        password : z.string()
    })
})

export { createUserSchema }