import { Request, Response } from "express";
import { getAllTours } from "../services/tour";

export const tourController = {
    getAll: async (req: Request, res: Response) => {
        let tours = await getAllTours()
        res.json({tours})
    }
    
}