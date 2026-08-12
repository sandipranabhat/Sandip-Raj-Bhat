import {z} from "zod";
export const contactSchema=z.object({name:z.string().trim().min(2).max(100),email:z.email(),organization:z.string().trim().max(150).optional(),subject:z.string().trim().min(2).max(200),message:z.string().trim().min(10).max(5000),website:z.string().max(0).optional(),recaptchaToken:z.string().min(1)});
export const loginSchema=z.object({email:z.email(),password:z.string().min(12).max(200)});
