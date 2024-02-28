import { NavLink } from 'react-router-dom'
import styles from './Nav.module.scss'

function Nav() {
  const getClassName = (props: { isActive: boolean; isPending: boolean }) => {
    return styles['nav-item'] + ' ' + (props.isActive ? styles.active : '')
  }

  return (
    <nav className={styles.navbar}>
      <NavLink className={getClassName} to="/">
        Home
      </NavLink>
      <NavLink className={getClassName} to="/login">
        Login
      </NavLink>
      <NavLink className={getClassName} to="/detail">
        Other
      </NavLink>
    </nav>
  )
}

export default Nav
