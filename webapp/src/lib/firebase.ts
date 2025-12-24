import { initializeApp } from 'firebase/app'
import { connectFirestoreEmulator, initializeFirestore } from 'firebase/firestore'

declare const FIREBASE_PORT_FIRESTORE: number

const firebaseConfig = {
    projectId: 'solid-firebase-starter',
}

const app = initializeApp(firebaseConfig)
export const firestore = initializeFirestore(app, {
    experimentalForceLongPolling: true,
})

if (import.meta.env.DEV) {
    connectFirestoreEmulator(firestore, 'localhost', FIREBASE_PORT_FIRESTORE)
}
