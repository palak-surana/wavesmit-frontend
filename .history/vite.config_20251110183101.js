import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/",
    publicDir: "public",
    build: {
        outDir: "dist",
        assetsDir: "assets",
        copyPublicDir: true,
        sourcemap: true,
    },
    server: {
        port: 5173,       // 👈 Fixed port
        strictPort: true, // 👈 Prevents Vite from switching ports
        open: true,       // 👈 Automatically opens browser when running
    },
})
