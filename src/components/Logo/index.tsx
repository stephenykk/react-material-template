import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// material-ui
import { ButtonBase } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

// project import
import Logo from './Logo'
import config from '@/config'
import { useActions, useGlobalState } from '@/hooks'

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ sx, to }: Partial<LogoSectionProps>) => {
  const { defaultId } = useGlobalState('menu')
  const { activeItem } = useActions()
  const dispatch = useDispatch()
  return (
    <ButtonBase
      disableRipple
      component={Link}
      onClick={() => dispatch(activeItem({ openItem: [defaultId] }))}
      to={!to ? config.defaultPath : to}
      sx={sx}
    >
      <Logo />
    </ButtonBase>
  )
}

type LogoSectionProps = {
  sx: Obj
  to: string
}

export default LogoSection
