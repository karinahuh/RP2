import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'
import Header from '../components/Header'
import AboutUsCard from '../components/AboutUsCard'

import CarolImg from '../assets/images/Carol.jpg'
import JuliaImg from '../assets/images/Julia.jpeg'
import KarinaImg from '../assets/images/karina.jpeg'
import katharina from '../assets/images/katharina.jpeg'
import LuanaImg from '../assets/images/luana.jpeg'
import YasminImg from '../assets/images/yasmin.jpeg'

export default function AboutUs() {

    const classes = useStyles()

    return (
      <>
      <Header/>
      <div className={classes.root}>
      <Typography variant='h3' color='primary'>Sobre nos</Typography>
      <Grid container spacing={3}>
        <Grid container item xs={3}>
            <AboutUsCard name='Carol' img={CarolImg} description='Oi' link='www.facebook.com.br'/>
        </Grid>
        <Grid container item xs={3}>
            <AboutUsCard name='Julia' img={JuliaImg} description='Oi' link='www.facebook.com.br'/>
        </Grid>
        <Grid container item xs={3}>
            <AboutUsCard name='Karina' img={KarinaImg} description='Oi' link='www.facebook.com.br'/>
        </Grid>
        <Grid container item xs={3}>
            <AboutUsCard name='Katarina' img={katharina} description='Oi' link='www.facebook.com.br'/>
        </Grid>
        <Grid container item xs={3}>
            <AboutUsCard name='Luana' img={LuanaImg} description='Oi' link='www.facebook.com.br'/>
        </Grid>
        <Grid container item xs={3}>
            <AboutUsCard name='Yasmin' img={YasminImg} description='Oi' link='www.facebook.com.br'/>
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
    }),
  )