import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes.tsx'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.ts'
import { Toaster } from 'react-hot-toast'
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <RouterProvider router={router} />
        <Toaster />
      </React.StrictMode>,
    </PersistGate>
  </Provider>
)
