import PropTypes from 'prop-types'
import { ReactNode, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// ==============================|| NAVIGATION - SCROLL TO TOP ||============================== //

const ScrollTop = ({ children }: ScrollTopProps) => {
  const location = useLocation()
  const { pathname } = location

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [pathname])

  return children || null
}

type ScrollTopProps = {
  children: ReactNode[] | ReactNode
}

export default ScrollTop
