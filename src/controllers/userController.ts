import { Request, Response } from "express";
import { createUser } from "../services/user";
import JWT from 'jsonwebtoken'
import dotenv from 'dotenv'
import { generateToken } from "../config/passport";

dotenv.config()


export const userController = {
    register: async (req: Request, res: Response) => {
        const { email, password } = req.body

        if(email && password){
            const user = await createUser({email, password})
            if(user){
                const token = generateToken({id: user.id})
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