import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { exec } from 'node:child_process'

// server start aana udane Edge la page open aagum
const openInBrowser = () => ({
  name: 'open-in-browser',
  configureServer(server) {
    server.httpServer?.once('listening', () => {
      const { port } = server.httpServer.address()
      exec(`start msedge http://localhost:${port}`) // Chrome na 'start chrome'
    })
  },
})

export default defineConfig({
  plugins: [react(), openInBrowser()],
})