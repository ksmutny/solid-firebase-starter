import { signalRoot } from '@test/lib/helpers.ts'
import { describe, expect, it } from 'vitest'

import { createCounter } from '@/signals/create-counter.ts'

describe('createCounter', () => {
    it('starts at 0 by default', () => {
        signalRoot(() => {
            const { count } = createCounter()
            expect(count()).toBe(0)
        })
    })

    it('accepts custom initial value', () => {
        signalRoot(() => {
            const { count } = createCounter(5)
            expect(count()).toBe(5)
        })
    })

    it('inc increments count', () => {
        signalRoot(() => {
            const { count, inc } = createCounter()
            inc()
            expect(count()).toBe(1)
            inc()
            expect(count()).toBe(2)
        })
    })
})
