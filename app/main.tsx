import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/store'

import '@/styles/index.scss'
import 'virtual:svg-icons-register'

import App from './App.tsx'
import { Loading } from '@/components/Loading.tsx'

const { DEV: isDev } = import.meta.env

const root = ReactDOM.createRoot(document.getElementById('root')!)

// eslint-disable-next-line react-refresh/only-export-components
const StrictMode = isDev
  ? (props: any) => <>{props.children}</>
  : React.StrictMode

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<Loading isCenter={true} />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
