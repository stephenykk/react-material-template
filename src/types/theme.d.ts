import '@mui/material/styles'
import '@mui/system'
import CustomShadows from '@/themes/shadows'
import Typography from '@/themes/typography'
import Palette from '@/themes/palette'

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: ReturnType<typeof CustomShadows>
  }

  interface ThemeOptions {
    customShadows?: ReturnType<typeof CustomShadows>
    typography?: ReturnType<typeof Typography>
    palette?: ReturnType<typeof Palette>
  }
}

declare module '@mui/system' {
  interface MUIStyledCommonProps {
    open?: boolean
  }
}
