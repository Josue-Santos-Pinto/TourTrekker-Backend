import { Request, Response } from "express";
import { createUser } from "../services/user";
import dotenv from 'dotenv'
import { generateToken } from "../config/passport";


dotenv.config()


export const userController = {
    register: async (req: Request, res: Response) => {
        let { email, password } = req.body

        if(email && password){  
            const user = await createUser({email, password})
            console.log(user)
            if(typeof user !==  'boolean'){
                const token = generateToken({id: user.id})
                res.status(201)
                .json({status: true, user, token})
            } else {
                res.json({error: 'Email e/ou senha incorretos'})
            }
        } else {
            res.json({error: 'Preencha todos os campos'})
        }   
    },

    edit: async (req: Request, res: Response) => {
        
    }
    
}