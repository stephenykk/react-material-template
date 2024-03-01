import PropTypes from 'prop-types'

// material-ui
import { useTheme } from '@mui/material/styles'
import { AppBar, IconButton, Toolbar, useMediaQuery } from '@mui/material'

// project import
import AppBarStyled from './AppBarStyled'
import HeaderContent from './HeaderContent'

// assets
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

// ==============================|| MAIN LAYOUT - HEADER ||============================== //

const Header = ({ open, handleDrawerToggle }: Partial<HeaderProps>) => {
  const theme = useTheme()
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'))

  const iconBackColor = 'grey.100'
  const iconBackColorOpen = 'grey.200'

  // common header
  const mainHeader = (
    <Toolbar>
      <IconButton
        disableRipple
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        edge="start"
        color="secondary"
        sx={{
          color: 'text.primary',
          bgcolor: open ? iconBackColorOpen : iconBackColor,
          ml: { xs: 0, lg: -2 },
        }}
      >
        {!open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </IconButton>
      <HeaderContent />
    </Toolbar>
  )

  // app-bar params
  const appBar = {
    position: 'fixed',
    color: 'inherit',
    elevation: 0,
    sx: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      // boxShadow: theme.customShadows.z1
    },
  }

  return (
    <>
      {!matchDownMD ? (
        // @ts-ignore
        <AppBarStyled open={open} {...appBar}>
          {mainHeader}
        </AppBarStyled>
      ) : (
        // @ts-ignore
        <AppBar {...appBar}>{mainHeader}</AppBar>
      )}
    </>
  )
}

type HeaderProps = {
  open: boolean
  handleDrawerToggle: Fn
}

export default Header
