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
      <Typography variant='h3' color='primary'>Sobre o Projeto</Typography>
      <Typography variant='h6' color='primary'>Observamos que as mulheres não se sentem estimuladas a ingressar na área detecnologia por falta de modelos e as poucas que adentram se sentem menos avontade em seus ambientes de ensino e trabalho por falta outra mulheres,  ou seja, estes fatores que tornam o ambiente pouco acolhedor e propenso a evasão. Com isso o objetivo geral ́e incentivar mulheres nas áreas de computação e aumentar a conexões entre aquelas que já se encontram nessas áreas</Typography>
      <Typography variant='h3' color='primary'>  </Typography>
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