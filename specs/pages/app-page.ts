import type { Page } from '@playwright/test'

export class AppPage {
    constructor(private page: Page) {}

    goto = () => this.page.goto('/')

    headingLocator = () => this.page.locator('h1')
    incrementButtonLocator = () => this.page.locator('button')
    clickIncrementButton = () => this.incrementButtonLocator().click()

    private countLocator = () => this.page.locator('p')
    countText = () => this.countLocator().textContent()
}
