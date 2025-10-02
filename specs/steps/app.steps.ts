import { expect } from '@playwright/test'
import { Given, Then, When } from './fixture.ts'

Given('I open the app', async function () {
    this.homePage.goto()
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
