import { expect } from '@playwright/test'
import { Given, Then, When } from './fixture.ts'

Given('I open the app', async function () {
    await this.homePage.goto()
})

Then('I should see the heading {string}', async function (heading: string) {
    await expect(this.homePage.headingLocator()).toHaveText(heading)
})

Then('I should see the increment button', async function () {
    await expect(this.homePage.incrementButtonLocator()).toBeVisible()
})

Then('I should see the count displaying {string}', async function (count: string) {
    expect(await this.homePage.countText()).toBe(`Count: ${count}`)
})

When('I click the increment button', async function () {
    await this.homePage.clickIncrementButton()
})

When('I submit message {string}', async function (message: string) {
    await this.homePage.fillMessageInput(message)
    await this.homePage.clickSubmitMessageButton()
})

When('I reload the page', async function () {
    await this.page.waitForTimeout(1000) // wait for Firestore to sync
    await this.page.reload({ waitUntil: 'load' })
})

Then('I should see {string} in the message list', async function (message: string) {
    await this.homePage.waitForMessage(message)
})
