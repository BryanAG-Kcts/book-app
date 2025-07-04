import { Request, Response } from 'express'
import { BookStorage } from '../services/book-storage'

export const bookController = {
  getBooks(_req: Request, res: Response) {
    res.status(200).json({
      message: 'Get books',
      status: 200,
      data: BookStorage.getBooks()
    })
  }
}
