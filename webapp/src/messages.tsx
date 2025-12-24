import { createSignal, For, Show } from 'solid-js'

import { createMessages } from '@/signals/create-messages.ts'

export const Messages = () => {
    const { messages, addMessage } = createMessages()
    const [input, setInput] = createSignal('')

    const submit = async () => {
        if (!input().trim()) return
        await addMessage(input())
        setInput('')
    }

    return (
        <div data-testid="message-board">
            <input
                data-testid="message-input"
                value={input()}
                onInput={e => setInput(e.currentTarget.value)}
                placeholder="Enter message"
            />
            <button type="button" data-testid="submit-message" onClick={submit}>
                Submit
            </button>
            <Show when={messages().length > 0}>
                <ul data-testid="message-list">
                    <For each={messages()}>{msg => <li data-testid="message-item">{msg.text}</li>}</For>
                </ul>
            </Show>
        </div>
    )
}
