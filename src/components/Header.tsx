import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  }),
)

export default function Header() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const history = useHistory()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleMonitorList= () => {
    history.push('/monitoras-lista')
  }

  const handleMonitorRegistration= () => {
    history.push('/cadastrar-monitora')
  }

  const handleAboutUs= () => {
    history.push('/sobre-nos')
  }

  const handleEvents= () => {
    history.push('/eventos')
  }

  const handleHome= () => {
    history.push('/')
  }


  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <IconButton
          aria-label='more'
          aria-controls='long-menu'
          aria-haspopup='true'
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id='long-menu'
          anchorEl={anchorEl}
          keepMounted
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: '40rem',
              width: '15rem',
            },
          }}
        >
          <MenuItem onClick={handleHome}>Inicio</MenuItem>
          <MenuItem onClick={handleMonitorList}>Nossas mentoras</MenuItem>
          <MenuItem onClick={handleEvents}>Eventos</MenuItem>
          <MenuItem onClick={handleMonitorRegistration}>Cadastro de mentora</MenuItem>
          <MenuItem onClick={handleAboutUs}>Sobre nos</MenuItem>
        </Menu>
        <Typography color='inherit' variant='h6'>
            Lovelace
        </Typography>
        <IconButton color='inherit' size='small' onClick={handleAboutUs} >
         Saiba Mais
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
