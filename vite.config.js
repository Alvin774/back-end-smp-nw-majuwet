import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    // Generate source maps for better debugging
    sourcemap: true,
    
    // Specify output directory
    outDir: 'dist',
    
    // Configure rollup options
    rollupOptions: {
      input: {
        // Specify your entry point
        main: resolve(__dirname, 'index.html'),
        page1: resolve(__dirname, 'login.html'),
        page2: resolve(__dirname, 'biodata-kepsek.html'),
        page3: resolve(__dirname, 'contact.html'),
        page4: resolve(__dirname, 'data-sekolah.html'),
        page5: resolve(__dirname, 'ekstrakurikuler.html'),
        page7: resolve(__dirname, 'fasilitas.html'),
        page8: resolve(__dirname, 'fathullah.html'),
        page9: resolve(__dirname, 'form-pendaftaran.html'),
        page10: resolve(__dirname, 'guru.html'),
        page11: resolve(__dirname, 'pengumuman-akun-berhasil.html'),
        page12: resolve(__dirname, 'ppdb.html'),
        page13: resolve(__dirname, 'profile.html'),
        page14: resolve(__dirname, 'register.html'),
        page15: resolve(__dirname, 'sambutan.html'),
        page16: resolve(__dirname, 'sejarah.html'),
        page17: resolve(__dirname, 'status-verivikasi.html'),
        page18: resolve(__dirname, 'visi-misi-tujuan.html'),

      },
      output: {
        // Configure asset file names
        assetFileNames: 'assets/[name].[hash].[ext]',
        // Configure chunk file names
        chunkFileNames: 'js/[name].[hash].js',
        // Configure main file names
        entryFileNames: 'js/[name].[hash].js'
      }
    },
    
    // Optimize dependencies
    optimizeDeps: {
      include: [] // Tambahkan dependencies yang perlu dioptimasi
    },
    
    // Configure asset handling
    assetsInlineLimit: 4096, // Files smaller than this (in bytes) will be inlined
    
    // Clean the output directory before build
    emptyOutDir: true
  },
  
  // Configure server options
  server: {
    port: 3000,
    open: true // Automatically open browser on server start
  },
  
  // Configure resolve options
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // Memungkinkan import menggunakan '@/'
    }
  }
})