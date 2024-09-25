import { z } from "zod";

const signUpScheamaValidation = z.object({
    name: z.string({
        required_error: "name is required"
    }),
    email: z.string().email("Invalid email address"),
    role: z.enum(['admin', 'user']).default('user'),
    password: z.string({
        required_error: "password is required"
    }).min(3, { message: "Password must be at least 3 characters" }),
    phone: z.string({
        required_error: "phone number is required"
    }),
    address: z.string(),
})

export default signUpScheamaValidation