import { useState } from 'react'

import './Login.scss'
import LoginForm from './components/LoginForm'

function Login() {
  const [email] = useState('exmpale@gmail.com')
  const [password] = useState('password')

  return (
    <div className="login-page">
      <h1>login page</h1>
      <LoginForm {...{ email, password }} />
    </div>
  )
}

export default Login
