import { defineConfig } from '@playwright/test'
import { defineBddConfig } from 'playwright-bdd'

const appUrl = 'http://localhost:5173'

export default defineConfig({
    testDir: defineBddConfig({
        features: 'specs/features',
        steps: ['specs/steps/**/*.ts'],
        outputDir: 'specs/steps-gen',
    }),
    webServer: {
        command: 'pnpm dev',
        url: appUrl,
        reuseExistingServer: true,
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
