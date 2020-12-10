import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Header from '../components/Header'

export default function Events() {

    const classes = useStyles()

    return (
      <>
      <Header/>
      <div className={classes.root}>
      <Typography variant='h3' color='primary'>Eventos</Typography>
      </div>
      </>
    )
  }
  
  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        alignItems: 'center',
        borderRadius: 15,
        margin: '4rem',
      },
    }),
  )