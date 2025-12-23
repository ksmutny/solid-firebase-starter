import { createCounter } from '@/signals/create-counter.ts'

export const Counter = () => {
    const { count, inc } = createCounter()

    return (
        <button type="button" onClick={inc}>
            Count: {count()}
        </button>
    )
}
