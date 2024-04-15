import { prisma } from "../libs/prisma"

type Props = {
    email: string,
    password: string
}

type FindUserProps = {
    email: string
}

export const getAllTours = async () => {
    try{ 
        let tours = await prisma.tour.findMany()
        return tours
    } catch(err){
        return false
    }
        
   
}