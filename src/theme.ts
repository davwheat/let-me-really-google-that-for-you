import { createMuiTheme } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'

export default createMuiTheme({
  palette: {
    primary: blue,
  },
  props: {
    MuiTextField: {
      variant: 'outlined',
    },
    MuiButton: {
      variant: 'contained',
      color: 'primary',
    },
    MuiSelect: {
      variant: 'outlined',
    },
  },
})
