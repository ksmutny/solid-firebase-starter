export const lazy = <T>(get: () => T): (() => T) => {
    let value: T | undefined

    return () => {
        if (value === undefined) value = get()
        return value
    }
}
