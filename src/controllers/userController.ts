import { Request, Response } from "express";
import { createUser } from "../services/user";

export const userController = {
    register: async (req: Request, res: Response) => {
        const { email, password } = req.body

        if(email && password){
            const user = await createUser({email, password})
            if(user){
                res.status(201).json({user})
            } 
        } else {
            res.json({error: 'Preencha todos os campos'})
        }   
    },

    edit: async (req: Request, res: Response) => {
        const { email, password } = req.body

        if(email && password){
            const user = await createUser({email, password})
            if(user){
                res.status(201).json({user})
            } 
        } else {
            res.json({error: 'Preencha todos os campos'})
        }   
    }
    
}