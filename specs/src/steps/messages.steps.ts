import { expect } from '@playwright/test'

import { Then, When, type World } from '@/steps/world.ts'

When('I submit message {string}', async function (this: World, text: string) {
    await this.messagesPage.submitMessage(text)
})

Then('I see {string} in the message list', async function (this: World, text: string) {
    await expect(this.messagesPage.messageList()).toBeVisible()
    await expect(this.messagesPage.messageItem(text)).toBeVisible()
})

When('I reload the page', async function (this: World) {
    await this.page.waitForTimeout(1000)
    await this.page.reload()
})
