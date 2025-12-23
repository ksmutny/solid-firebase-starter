import { expect } from '@playwright/test'
import { Given, Then, When, type World } from '@/steps/world.ts'

Given('I open the app', async function (this: World) {
    await this.appPage.open()
})

Then('I see the heading {string}', async function (this: World, text: string) {
    await expect(this.appPage.heading()).toHaveText(text)
})

Then('I see the increment button', async function (this: World) {
    await expect(this.appPage.incrementButton()).toBeVisible()
})

Then('I see the count displaying {string}', async function (this: World, count: string) {
    await expect(this.appPage.count()).toHaveText(count)
})

When('I increment the counter', async function (this: World) {
    await this.appPage.increment()
})
