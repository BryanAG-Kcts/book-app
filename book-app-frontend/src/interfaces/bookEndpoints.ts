import type { Book } from './book'

export interface BooksEndpoint {
  message: string
  status: number
}

export interface GetBooksEndpoint extends BooksEndpoint {
  data: Book[]
}
