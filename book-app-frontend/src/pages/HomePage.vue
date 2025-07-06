<script setup lang="ts">
import { useBookStore } from '../store/books'
import { onMounted } from 'vue'

const bookStore = useBookStore()

onMounted(() => {
  bookStore.fetchBooks()
})
</script>

<template>
  <div class="h-screen flex justify-center items-center gap-12">
    <h1 class="text-4xl">Ruta de prueba</h1>
    <div>
      <div v-if="bookStore.loading">Cargando libros...</div>
      <div v-if="bookStore.error">{{ bookStore.error }}</div>
      <ul class="text-center">
        <li
          v-for="book in bookStore.books"
          :key="book.id"
        >
          {{ book.title }}
        </li>
      </ul>
    </div>
  </div>
</template>
