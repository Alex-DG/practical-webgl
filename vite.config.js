const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        boilerplate: resolve(__dirname, 'pages/boilerplate/index.html'),
        drawingpoint: resolve(__dirname, 'pages/drawing-point/index.html'),
        particles: resolve(__dirname, 'pages/particles/index.html'),
      },
    },
  },
})
