type Props = {
  email: string
  password: string
}

export default function LoginForm(props: Props) {
  return <div className="login-form">login form {props.email}</div>
}
