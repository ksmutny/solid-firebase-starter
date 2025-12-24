import { collection, type FirestoreDataConverter, type QueryDocumentSnapshot } from 'firebase/firestore'
import { firestore } from '@/lib/firebase.ts'
import { lazy } from '@/lib/fn.ts'
import type { Message } from '@/model/message.ts'

type MessageDoc = Omit<Message, 'id'>

const messageConverter: FirestoreDataConverter<Message, MessageDoc> = {
    toFirestore: (value: Message) => ({ text: value.text }),
    fromFirestore: (snapshot: QueryDocumentSnapshot<Message, MessageDoc>) => {
        const data = snapshot.data()
        return { id: snapshot.id, text: data.text }
    },
}

export const messageCollection = lazy(() => collection(firestore, 'messages').withConverter(messageConverter))
