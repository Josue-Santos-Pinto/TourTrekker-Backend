import { Request, Response, Router } from "express"
import { userController } from "../controllers/userController"
import { tourController } from "../controllers/tourController"
import { privateRoute } from "../config/passport"

export const mainRouter = Router()

mainRouter.get('/ping', (req: Request, res: Response) => {
    res.json({'pong': true})
})

mainRouter.post('/user', userController.register)
mainRouter.put('/user', privateRoute, userController.edit)
mainRouter.get('/tours', tourController.getAll)
