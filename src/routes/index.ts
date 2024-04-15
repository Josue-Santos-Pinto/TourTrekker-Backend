import { Request, Response, Router } from "express"
import { userController } from "../controllers/userController"
import { tourController } from "../controllers/tourController"
import { Auth } from "../middlewares/auth"

export const mainRouter = Router()

mainRouter.get('/ping', (req: Request, res: Response) => {
    res.json({'pong': true})
})

mainRouter.post('/user', userController.register)
mainRouter.put('/user', Auth.private, userController.edit)
mainRouter.get('/tours', tourController.getAll)
