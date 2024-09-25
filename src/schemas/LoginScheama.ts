import { z } from "zod";

const loginScheamaValidation = z.object({
    email: z.string({ required_error: 'Please Type your email properly' }).email({ message: "Invalid email address" }),
    password: z.string({ required_error: 'Please Type your password properly' })

})

export default loginScheamaValidation