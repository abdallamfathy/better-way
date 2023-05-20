import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthProvider } from 'react-auth-kit'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider
      authName={'_auth'}
      authType="cookie"
      cookieDomain={window.location.hostname}
      cookieSecure={false}
      >
    <App />
      </AuthProvider>
  </React.StrictMode>,
)
