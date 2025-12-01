import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: use your repo name here (with leading and trailing slash)
  base: "/palak-surana-waves-nss-mit-frontend/",
  publicDir: "public",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    copyPublicDir: true,
    sourcemap: true,
  },
})