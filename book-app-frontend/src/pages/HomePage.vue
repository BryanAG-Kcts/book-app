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

    <div>
      Individual:
      <p>{{ bookStore.selectedBook?.genre }}</p>
    </div>

    <div>
      <button @click="bookStore.getBookById(1)">Obtener libro</button>
      <br />
      <button @click="bookStore.deleteBook(1)">Eliminar libro</button>
      <br />
      <button
        @click="
          bookStore.updateBook({
            id: 1,
            title: 'Libro actualizado',
            author: 'Autor actualizado',
            genre: 'Genero actualizado',
            image: 'http://URL_ADDRESS1',
            price: 100,
            year: 1999
          })
        "
      >
        actualizar libro
      </button>
      <br />
      <button @click="
          bookStore.createBook({
            title: 'Libro actualizado',
            author: 'Autor actualizado',
            genre: 'Genero actualizado',
            image: 'http://URL_ADDRESS',
            price: 100,
            year: 1999
          })
        ">crear libro</button>
    </div>
  </div>
</template>
