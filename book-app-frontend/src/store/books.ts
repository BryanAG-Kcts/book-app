import { defineStore } from 'pinia'
import type { Book } from '../interfaces/book'
import { saveFetch } from '../utils/saveFetch'
import { BOOKS_ENDPOINT } from '../constants/api'
import type { GetBooksEndpoint } from '../interfaces/BookEndpoints'

export const useBookStore = defineStore('book', {
  state: () => ({
    books: [] as Book[],
    loading: false,
    error: null as string | null
  }),
  actions: {
    async fetchBooks() {
      this.loading = true
      this.error = null
      const [data, error] = await saveFetch<GetBooksEndpoint>(BOOKS_ENDPOINT)
      this.loading = false
      this.error = error?.message ?? null
      this.books = data?.data ?? []
    }
  }
})
