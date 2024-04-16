import { prisma } from "../libs/prisma"

export const getAllTours = async () => {
    try{ 
        let tours = await prisma.tour.findMany()
        return tours
    } catch(err){
        return false
    } 
}

export const postNewTour = async () => {
    try {
        return true
    } catch(err){
        return false
    }
}