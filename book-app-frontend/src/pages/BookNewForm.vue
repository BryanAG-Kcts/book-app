<script setup lang="ts">
import TitlePage from '../components/atoms/TitlePage.vue'
import BookForm from '../components/organisms/BookForm.vue'
import type { Book } from '../interfaces/book'
import { useBookStore } from '../store/books'

const bookStore = useBookStore()

function submit(book: Book) {
  bookStore.createBook(book)
}
</script>

<template>
  <TitlePage title="Crear libro">
    <i
      class="pi pi-address-book"
      style="font-size: 1.875rem"
    ></i>
  </TitlePage>
  <BookForm @handle-submit="submit"></BookForm>
</template>
