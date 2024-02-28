import { Outlet } from 'react-router'

function Header() {
  return (
    <div className="app-main">
      <Outlet />
    </div>
  )
}

export default Header
