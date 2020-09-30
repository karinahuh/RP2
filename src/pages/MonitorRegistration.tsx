/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Typography, Card } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

export default function MonitorForm() {

  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Typography variant='h3'>Cadastro de Monitora</Typography>
      <TextField
        label='Nome da Monitra'
        placeholder='Aula de'
        margin='normal'
        fullWidth
        variant='outlined'
      />
      <TextField
        label='Conhecimentos'
        placeholder='Ferramentas que conhece'
        margin='normal'
        fullWidth
        variant='outlined'
      />
      <TextField
        label='Link de rede social'
        placeholder='Link do linkedin, facebook, instagran'
        margin='normal'
        fullWidth
        variant='outlined'
      />
      <TextField
        label='Descrição Pessoal'
        multiline
        placeholder='Faça uma brave descrição sobre você mesma'
        margin='normal'
        fullWidth
        variant='outlined'
      />
      <Button
        className={classes.button}
        color='secondary'
        size='large'
        variant='contained'
      >
          Salvar Cadastro
      </Button>
    </Card>
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
