import type { Page } from '@playwright/test'

export class AppPage {
    constructor(private page: Page) {}

    open = () => this.page.goto('/')

    // Locators
    heading = () => this.page.getByRole('heading', { level: 1 })
    incrementButton = () => this.page.getByTestId('increment-button')
    count = () => this.page.getByTestId('count')

    // Actions
    increment = () => this.incrementButton().click()
}
