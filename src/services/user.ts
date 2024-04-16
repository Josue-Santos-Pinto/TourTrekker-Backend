import { Prisma, PrismaClient } from "@prisma/client"
import { prisma } from "../libs/prisma"
import bcrypt from 'bcrypt'
import { generateToken } from "../config/passport"
type Props = {
    email: string,
    password: string
}

type FindUserProps = {
    email: string
}
type FindUserPkProps = {
    id: number
}

type LoginProps = {
        userPassword: string,
        password: string
}

const findUser = async ({email}: FindUserProps ) => {
        return await prisma.user.findFirst({where: {email}})
}

export const findUserByPk = async ({id}: FindUserPkProps ) => {
    return await prisma.user.findFirst({where: {id}})
}

const login = async ({userPassword, password}: LoginProps) => {
   return       
}

export const createUser = async ({email, password}: Props) => {
    
        const hasUser = await findUser({email})
        if(!hasUser){
            password = await bcrypt.hash(password, 10)
            const user = await prisma.user.create({data: {email, password}})
            return user
        } else {
            if(await bcrypt.compare(password, hasUser.password)){
                return hasUser
            } else {
                return false
            }
        } 
    
        
   
}