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
    <Typography variant='h3' color='primary' > Nossas Tutoras </Typography>
    <br></br>
    <br></br>

    <Grid container spacing={4}>
      <Grid container item xs={4}>
       <MonitorCard name='Carol' description='Oi' link='www.facebook.com.br'/>
      </Grid>
      <Grid container item xs={4}>
        <MonitorCard name='Carol' description='Oi' link='www.facebook.com.br'/>
      </Grid>
      <Grid container item xs={4}>
        <MonitorCard name='Carol' description='Oi' link='www.facebook.com.br'/>
      </Grid>
    </Grid>
    <br></br>
    <br></br>
    <Grid container spacing={4}>
      <Grid container item xs={4}>
       <MonitorCard name='Carol' description='Oi' link='www.facebook.com.br'/>
      </Grid>
      <Grid container item xs={4}>
        <MonitorCard name='Carol' description='Oi' link='www.facebook.com.br'/>
      </Grid>
      <Grid container item xs={4}>
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
      alignItems: 'left',
      borderRadius: 15,
      margin: '4rem',
    },
    button: {
      marginTop: '0.8rem',
    },
  }),
)
