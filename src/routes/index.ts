import { Request, Response, Router } from "express"
import { userController } from "../controllers/userController"
import { tourController } from "../controllers/tourController"
import { privateRoute } from "../config/passport"
import multer from 'multer'


const upload = multer({
    dest: './tmp',
    fileFilter: (req, file, cb) => {
        const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png']
        cb(null, allowed.includes(file.mimetype))
    },
    limits: {fieldSize: 20000000}
})


export const mainRouter = Router()


mainRouter.get('/ping', (req: Request, res: Response) => {
    res.json({'pong': true})
})

mainRouter.post('/user', userController.register)
mainRouter.put('/myaccount', privateRoute, userController.edit)
mainRouter.get('/tours', tourController.getAll)
mainRouter.post('/newtour',upload.array('images',10), tourController.newTour)
