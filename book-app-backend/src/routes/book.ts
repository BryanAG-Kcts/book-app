import { Router } from 'express'
import { bookController } from '../controllers/book'

export const bookRouter = Router()
bookRouter.get('/', bookController.getBooks)
bookRouter.post('/', bookController.postBook)
bookRouter.get('/:id', bookController.getBook)
