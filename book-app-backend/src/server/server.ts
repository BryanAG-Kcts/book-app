import express, { Express } from 'express'
import { bookRouter } from '../routes/book'

export class Server {
  private app: Express
  private port = 3000

  constructor() {
    this.app = express()
  }

  private middlewares() {
    this.app.use(express.json())
  }

  private routes() {
    this.app.use('/books', bookRouter)
  }

  public start() {
    this.middlewares()
    this.routes()
    this.app.listen(this.port, () => {
      console.log(`Server listening in http://localhost:${this.port}`)
    })
  }
}
