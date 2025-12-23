import { defineConfig } from '@playwright/test'
import { defineBddConfig } from 'playwright-bdd'

const appUrl = 'http://localhost:5173'

export default defineConfig({
    testDir: defineBddConfig({
        features: 'features',
        steps: ['src/steps/**/*.ts'],
        outputDir: 'steps-gen',
    }),
    webServer: {
        command: 'pnpm -C webapp dev',
        url: appUrl,
        reuseExistingServer: true,
        cwd: '..',
    },
    projects: [
        {
            name: 'chromium',
            use: {
                baseURL: appUrl,
                browserName: 'chromium',
            },
        },
    ],
})
