import express, { ErrorRequestHandler, Request, Response } from 'express'
import path from 'path'
import cors from 'cors'
import {mainRouter} from './routes'
import dotenv from 'dotenv'
import passport from 'passport'

dotenv.config()

const server = express()
server.use(express.static(path.join(__dirname,'../public')))

server.use(cors({origin: '*'}))

server.use(express.urlencoded({extended: true}))
server.use(passport.initialize())
server.use(mainRouter)

server.use((req: Request,res:Response)=>{
    res.status(404).send('Página não encontrada')
})
const errorHandler: ErrorRequestHandler = (err, req, res) => {
    err.status ? res.status(err.status) : res.status(400)
    err.message ? res.json({error: err.message}) : res.json({error: 'Ocorreu um erro'})
}

server.use(errorHandler)

server.listen(process.env.PORT)