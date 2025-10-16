import { addDoc, collection, onSnapshot, serverTimestamp } from 'firebase/firestore'
import { createSignal, For, onCleanup, onMount, Show } from 'solid-js'
import { firestore } from './lib/firebase.ts'

type Message = {
    readonly id: string
    readonly text: string
}

function lazy<T>(get: () => T): () => T {
    let value: T | undefined

    return () => {
        if (value === undefined) value = get()
        return value
    }
}

export const App = () => {
    const [count, setCount] = createSignal(0)
    const increment = () => setCount(prev => prev + 1)

    const [messageInput, setMessageInput] = createSignal('')
    const [messages, setMessages] = createSignal<Message[]>([])

    const messageCollection = lazy(() => collection(firestore, 'messages'))

    onMount(() => {
        const unsubscribe = onSnapshot(messageCollection(), snapshot => {
            const data = snapshot.docs.map(doc => ({ id: doc.id, text: doc.data().text ?? '' }))
            setMessages(data)
        })
        onCleanup(unsubscribe)
    })

    const submitMessage = async (event: SubmitEvent) => {
        event.preventDefault()

        const text = messageInput().trim()
        if (!text) return

        setMessageInput('')
        await addDoc(messageCollection(), {
            text,
            createdAt: serverTimestamp(),
        })
    }

    return (
        <>
            <h1>Solid Firebase Starter</h1>
            <button type="button" onClick={increment}>
                Increment
            </button>
            <p>Count: {count()}</p>
            <form onSubmit={submitMessage}>
                <label for="message-input">Message</label>
                <input
                    id="message-input"
                    type="text"
                    value={messageInput()}
                    onInput={event => setMessageInput(event.currentTarget.value)}
                    placeholder="Write a message"
                    autocomplete="off"
                />
                <button type="submit" data-testid="message-submit">
                    Submit
                </button>
            </form>
            <Show when={messages().length > 0}>
                <ul data-testid="message-list">
                    <For each={messages()}>{msg => <li data-testid="message-item">{msg.text}</li>}</For>
                </ul>
            </Show>
        </>
    )
}
