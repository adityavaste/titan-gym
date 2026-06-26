import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        weightlifting: 'weightlifting.html',
        cardio: 'cardio.html',
        yoga: 'yoga.html',
        zumba: 'zumba.html',
        contact: 'contact.html',
      }
    }
  }
})
