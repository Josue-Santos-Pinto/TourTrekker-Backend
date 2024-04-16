import { Request, Response } from "express";
import { getAllTours, postNewTour } from "../services/tour";

export const tourController = {
    getAll: async (req: Request, res: Response) => {
        let tours = await getAllTours()
        res.json({tours})
    },
    newTour: async (req: Request, res: Response) => {
        const {id, name, price} = req.body
        
        console.log(req.files)
        
        res.json({})
    }
    
}