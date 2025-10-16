import { expect, type Page } from '@playwright/test'

export class AppPage {
    constructor(private page: Page) {}

    goto = () => this.page.goto('/')

    headingLocator = () => this.page.locator('h1')
    incrementButtonLocator = () => this.page.getByRole('button', { name: 'Increment' })
    clickIncrementButton = () => this.incrementButtonLocator().click()

    private countLocator = () => this.page.locator('p')
    countText = () => this.countLocator().textContent()

    messageInputLocator = () => this.page.locator('#message-input')
    fillMessageInput = (message: string) => this.messageInputLocator().fill(message)

    submitMessageButtonLocator = () => this.page.getByTestId('message-submit')
    clickSubmitMessageButton = () => this.submitMessageButtonLocator().click()

    messageListLocator = () => this.page.getByTestId('message-list')
    messageItemsLocator = () => this.page.getByTestId('message-item')
    messageItemByTextLocator = (text: string) => this.page.getByTestId('message-item').filter({ hasText: text })

    waitForMessage = (text: string) => expect(this.messageListLocator()).toContainText(text)
}
