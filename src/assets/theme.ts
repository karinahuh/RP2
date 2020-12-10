import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#FF9EC',
      paper: '#E4C9E4',
    },
    primary: {
      main: '#5D2A42',
      contrastText: '#FF9EC',
    },
    secondary: {
      main: '#FB6376',
      contrastText: '#FF9EC',
    },
    type: 'dark',
  },
  typography: {
    fontFamily: 'Poppins, Archivo, Roboto, sans-serif',
    allVariants: {
      color: '#5D2A42',
    },
  },
})

export default theme
