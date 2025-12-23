import { createSignal } from 'solid-js'

export const createCounter = (initial: number = 0) => {
    const [count, setCount] = createSignal(initial)
    const inc = () => setCount(prev => prev + 1)

    return { count, inc }
}
