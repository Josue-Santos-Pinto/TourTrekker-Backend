import { Request, Response, Router } from "express"
import { prisma } from "../libs/prisma"

export const mainRouter = Router()

mainRouter.get('/ping', (req: Request, res: Response) => {
    res.json({'pong': true})
})

mainRouter.get('/test', (req: Request, res: Response) => {
    prisma.user
})
