import MonitorCard from '../components/MonitorCard'

import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'
import Header from '../components/Header'

export default function LessonList() {

  const classes = useStyles()

  return (
    <>
    <Header/>
    <div className={classes.root}>
    <Typography variant='h3' color='primary'>Aulas disponíveis</Typography>

    <Grid container spacing={3}>
      <Grid container item xs={3}>
       <MonitorCard name='Carol' description='Oi' link='www.facebook.com.br'/>
      </Grid>
      <Grid container item xs={3}>
        <MonitorCard name='Carol' description='Oi' link='www.facebook.com.br'/>
      </Grid>
      <Grid container item xs={3}>
        <MonitorCard name='Carol' description='Oi' link='www.facebook.com.br'/>
      </Grid>
    </Grid>
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
    button: {
      marginTop: '0.8rem',
    },
  }),
)
