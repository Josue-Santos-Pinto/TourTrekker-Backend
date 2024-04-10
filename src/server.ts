import express, { Request, Response } from 'express'
import path from 'path'
import cors from 'cors'
import MainRoute from './routes'
import dotenv from 'dotenv'

dotenv.config()

const server = express()
server.use(express.static(path.join(__dirname,'../public')))

server.use(cors({origin: '*'}))

server.use(express.urlencoded({extended: true}))

server.use(MainRoute)

server.use((req: Request,res:Response)=>{
    res.status(404).send('Página não encontrada')
})

server.listen(process.env.PORT)