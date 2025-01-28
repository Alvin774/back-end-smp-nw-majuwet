// main.js
// Import semua CSS
import.meta.glob('../css/**/*.css', { eager: true })

// Import semua modules
const modules = import.meta.glob('./modules/**/*.js')