import { createRoot } from 'solid-js'

export const signalRoot = <T>(body: () => T) =>
    createRoot(dispose => {
        body()
        dispose()
    })
