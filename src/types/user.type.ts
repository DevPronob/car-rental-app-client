export type TUser = {
    name: string;
    _id: string
    email: string;
    role: 'user' | 'admin';
    password: string;
    phone: string;
    address?: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}