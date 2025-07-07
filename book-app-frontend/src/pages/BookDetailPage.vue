<script setup lang="ts">
import { onMounted } from 'vue'
import TitlePage from '../components/atoms/TitlePage.vue'
import { useBookStore } from '../store/books'
import { useRoute } from 'vue-router'
import { Message } from 'primevue'
import BookForm from '../components/organisms/BookForm.vue'
import type { Book } from '../interfaces/book'

const route = useRoute()
const bookStore = useBookStore()
onMounted(() => {
  bookStore.getBookById(Number(route.params.id as string))
})

function handleSubmit(book: Book) {
  bookStore.updateBook(book)
}
</script>

<template>
  <Message
    severity="info"
    icon="pi pi-spin pi-spinner"
    v-if="bookStore.loading"
  >
    Cargando libro
  </Message>

  <Message
    severity="error"
    icon="pi pi-times-circle"
    v-if="!bookStore.selectedBook && !bookStore.loading"
  >
    No se encontró el libro solicitado
  </Message>

  <div
    v-else
    class="flex flex-col gap-3"
  >
    <TitlePage :title="`Detalles de ` + bookStore.selectedBook?.title">
      <i
        class="pi pi-file"
        style="font-size: 1.875rem"
      ></i>
    </TitlePage>

    <BookForm :book="bookStore.selectedBook ?? undefined" @handleSubmit="handleSubmit"></BookForm>
  </div>
</template>
