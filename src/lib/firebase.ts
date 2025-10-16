import { initializeApp } from 'firebase/app'
import { connectFirestoreEmulator, initializeFirestore } from 'firebase/firestore'

const firebaseConfig = {
    projectId: 'solid-firebase-starter',
}

const app = initializeApp(firebaseConfig)
export const firestore = initializeFirestore(app, {})

if (import.meta.env.DEV) {
    connectFirestoreEmulator(firestore, 'localhost', 8088)
}
