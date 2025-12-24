import type { Page } from '@playwright/test'

export class MessagesPage {
    constructor(private page: Page) {}

    messageInput = () => this.page.getByTestId('message-input')
    submitButton = () => this.page.getByTestId('submit-message')
    messageList = () => this.page.getByTestId('message-list')
    messageItems = () => this.page.getByTestId('message-item')
    messageItem = (text: string) => this.messageItems().filter({ hasText: text })

    submitMessage = async (text: string) => {
        await this.messageInput().fill(text)
        await this.submitButton().click()
    }
}
