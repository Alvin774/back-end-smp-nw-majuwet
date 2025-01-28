// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import glob from 'glob'

// Fungsi untuk mendapatkan semua file HTML
function getHtmlFiles() {
  const entries = {}
  // Mengambil semua file HTML dari src dan root
  const files = glob.sync('**/*.html', {
    ignore: ['dist/**', 'node_modules/**']
  })
  
  files.forEach(file => {
    const name = file.replace('.html', '')
    entries[name] = resolve(__dirname, file)
  })
  
  return entries
}

export default defineConfig({
  base: './',
  
  build: {
    rollupOptions: {
      input: getHtmlFiles(),
    },
    // Mengatur output directory
    outDir: 'dist',
    // Mempertahankan struktur folder
    assetsDir: 'assets',
  },
  
  // Plugin untuk menangani file statis
  plugins: [
    {
      name: 'copy-assets',
      async buildStart() {
        // Anda bisa menambahkan logic disini untuk meng-copy assets
      }
    }
  ],
  
  // Konfigurasi untuk assets dan aliases
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './src/assets'),
      '@css': resolve(__dirname, './src/css'),
      '@js': resolve(__dirname, './src/js')
    }
  }
})