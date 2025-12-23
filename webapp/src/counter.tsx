import { createCounter } from '@/signals/create-counter.ts'

interface CountProps {
    readonly count: number
}

const Count = (props: CountProps) => <span data-testid="count">{props.count}</span>

export const Counter = () => {
    const { count, inc } = createCounter()

    return (
        <button type="button" data-testid="increment-button" onClick={inc}>
            Count: <Count count={count()} />
        </button>
    )
}
