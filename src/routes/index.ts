import { Request, Response, Router } from "express"
import { userRoutes } from "./user"

export const mainRouter = Router()

mainRouter.get('/ping', (req: Request, res: Response) => {
    res.json({'pong': true})
})

mainRouter.post('/user', userRoutes.register)
