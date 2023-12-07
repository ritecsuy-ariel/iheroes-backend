import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        coverage: {
            exclude: [
                'migrations',
                'src/server.ts',
                'src/interfaces',
                'src/env',
            ],
            include: ['src'],
        },
    },
})