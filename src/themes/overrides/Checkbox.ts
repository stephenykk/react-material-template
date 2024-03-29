import { Theme } from '@mui/material/styles'

// ==============================|| OVERRIDES - CHECKBOX ||============================== //

export default function Checkbox(theme: Theme) {
  return {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          // @ts-ignore
          color: theme.palette.secondary[300],
        },
      },
    },
  }
}
