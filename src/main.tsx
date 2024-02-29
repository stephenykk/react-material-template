import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// scroll bar
import 'simplebar/src/simplebar.css'

// third-party
import { Provider as ReduxProvider } from 'react-redux'

// apex-chart
import './assets/third-party/apex-chart.css'

import 'virtual:svg-icons-register'
import '@/styles/index.scss'

// project import
import App from './App'
import { store } from '@/store'

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //
console.log('import.meta.env::', import.meta.env)
if (import.meta.env.NAIM_DEBUG === 'yes') {
  import('@/utils').then((utils) => {
    Object.assign(console, { utils })
    // @ts-ignore
    console.log('===> console.utils', console.utils)
  })
}

const container: HTMLElement = document.getElementById('root')!
const root = createRoot(container)
root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </StrictMode>,
)
