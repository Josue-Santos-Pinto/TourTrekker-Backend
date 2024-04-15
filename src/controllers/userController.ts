import { Request, Response } from "express";
import { createUser } from "../services/user";
import JWT from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()


export const userController = {
    register: async (req: Request, res: Response) => {
        const { email, password } = req.body

        if(email && password){
            const user = await createUser({email, password})
            if(user){
                const token = JWT.sign(
                    {id: user.id, email: user.email},
                    process.env.JWT_SECRET_KEY as string,
                    {expiresIn: '2h'}
                )
                res.status(201)
                .json({status: true, user, token})
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