import { decodeToken } from "react-jwt";
export const verifyToken = (token: string) => {
    return decodeToken(token)
}