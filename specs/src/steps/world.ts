import type { Page, TestInfo } from '@playwright/test'
import { test as base, createBdd } from 'playwright-bdd'

import { AppPage } from '@/pages/app.page.ts'
import { MessagesPage } from '@/pages/messages.page.ts'

export class World {
    readonly appPage: AppPage
    readonly messagesPage: MessagesPage

    constructor(
        public page: Page,
        public testInfo: TestInfo,
    ) {
        this.appPage = new AppPage(page)
        this.messagesPage = new MessagesPage(page)
    }
}

export const test = base.extend<{ world: World }>({
    world: async ({ page }, use, testInfo) => {
        await use(new World(page, testInfo))
    },
})

export const { Given, When, Then } = createBdd(test, { worldFixture: 'world' })
