import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import tsconfigPaths from 'vite-tsconfig-paths'

const isHostMode = process.argv.includes('--host')

const local = {
    FIREBASE_PORT_FIRESTORE: 8088,
}

const external = {
    FIREBASE_PORT_FIRESTORE: process.env.FIREBASE_PORT_FIRESTORE ?? local.FIREBASE_PORT_FIRESTORE,
}

export default defineConfig({
    plugins: [solidPlugin(), tsconfigPaths()],
    define: isHostMode ? external : local,
})
