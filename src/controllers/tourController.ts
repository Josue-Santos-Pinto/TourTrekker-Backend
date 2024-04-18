import { Request, Response } from "express";
import { getAllTours, postNewTour } from "../services/tour";
import sharp from 'sharp'

export const tourController = {
    getAll: async (req: Request, res: Response) => {
        let tours = await getAllTours()
        res.json({tours})
    },
    newTour: async (req: Request, res: Response) => {
        if(req.files && Array.isArray(req.files)){
            const allImages = req.files.map(async (file: Express.Multer.File) => {
                await sharp(file.path)
                .resize(500)
                .toFormat('jpeg')
                .toFile(`./public/media/${file.filename}.jpg`)
            });
            Promise.all(allImages)
            res.json({})
                             
        } else {
            res.status(400)
            res.json({error: "arquivo invalido"})
        }
    }
    
}