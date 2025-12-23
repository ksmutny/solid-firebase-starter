/* @refresh reload */
import { render } from 'solid-js/web'

import { App } from './app.tsx'

const root = document.getElementById('root')

if (root && root instanceof HTMLElement) {
    render(() => <App />, root)
}
