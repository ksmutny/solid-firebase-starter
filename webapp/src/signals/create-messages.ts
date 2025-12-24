import { addDoc, onSnapshot } from 'firebase/firestore'
import { createSignal, onCleanup, onMount } from 'solid-js'

import { messageCollection } from '@/db/messages.ts'
import type { Message } from '@/model/message.ts'

export const createMessages = () => {
    const [messages, setMessages] = createSignal<readonly Message[]>([])

    onMount(() => {
        const unsubscribe = onSnapshot(messageCollection(), snapshot =>
            setMessages(snapshot.docs.map(doc => doc.data())),
        )
        onCleanup(unsubscribe)
    })

    const addMessage = async (text: string) => {
        await addDoc(messageCollection(), { id: '', text })
    }

    return { messages, addMessage }
}
