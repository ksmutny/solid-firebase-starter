import { createSignal } from 'solid-js'

export const App = () => {
    const [count, setCount] = createSignal(0)
    const increment = () => setCount(prev => prev + 1)

    return <>
        <h1>Solid Firebase Starter</h1>
        <button onClick={ increment }>Increment</button>
        <p>Count: { count() }</p>
    </>
}
