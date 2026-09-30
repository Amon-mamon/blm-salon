import { minLength, z } from 'zod'

export const userSchema = z.object({
    username: z.string(),
    email: z.string(),
    password: z.string(),
    confirm_password: z.string().min(1, {
        message: "Please confirm your password"
    })
}).refine((data) => data.password === data.confirm_password, {
    message: "Password do not match",
    path:["confirm_password"]
})

export type UserFormValues = z.infer<typeof userSchema>