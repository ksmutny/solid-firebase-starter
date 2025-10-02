import type { Page, TestInfo } from '@playwright/test'
import { test as base, createBdd } from 'playwright-bdd'
import { AppPage } from '../pages/app-page.ts'

export class World {
    constructor(
        public page: Page,
        public testInfo: TestInfo,
    ) {
        this.homePage = new AppPage(this.page)
    }

    readonly homePage: AppPage
}

export const test = base.extend<{ world: World }>({
    world: async ({ page }, use, testInfo) => {
        const world = new World(page, testInfo)
        await use(world)
    },
})

export const { Given, When, Then } = createBdd(test, {
    worldFixture: 'world',
})
