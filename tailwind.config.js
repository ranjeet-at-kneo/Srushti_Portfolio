
/** @type {import('tailwindcss').Config} */
import path from "path";
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    "./src/**/*.{html,js}"
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".jsx"],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}