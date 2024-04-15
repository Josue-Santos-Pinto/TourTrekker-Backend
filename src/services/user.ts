import { Prisma } from "@prisma/client"
import { prisma } from "../libs/prisma"

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

const findUser = async ({email}: FindUserProps ) => {
        return await prisma.user.findFirst({where: {email}})
}

export const findUserByPk = async ({id}: FindUserPkProps ) => {
    return await prisma.user.findFirst({where: {id}})
}

export const createUser = async ({email, password}: Props) => {
    try{ 
        const hasUser = await findUser({email})
        if(!hasUser){
                const user = await prisma.user.create({data: {email, password}})
            return user
        } else {
            return hasUser
        } 
    } catch(err){
        return false
    }
        
   
}