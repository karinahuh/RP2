import React from 'react'
import { makeStyles, createStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'

import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';

type AboutUsCardProps = {
  img: string
  description: string
  link: string
  name: string
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: '15rem',
      height: '20rem',
      borderRadius: 15,
    },
    media: {
      height: 0,
      paddingTop: '7rem', // 16:9
    },
    button: {
      width: '250px',
      height: '50px',
      marginLeft: '3.2rem',
      marginRight: '3.2rem',
      fontWeight: 6000,
      borderRadius: 15,
    },
    imageSize: {
      width: '5rem',
      height: '5rem',
    },
  }),
)

export default function MonitorCard({ img, description, link, name }:AboutUsCardProps) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
       <CardHeader 
        avatar={
          <Avatar alt="Carol" src={img} className={classes.imageSize} />
        }
        titleTypographyProps={{variant:'h4' }}
        title={name}
      />    
      <CardContent>
        <Typography variant='body2' component='p' align='center'>
         {description}<br />
         <Link href="https://facebook.com.br">
            {link} 
          </Link>
        </Typography>
      </CardContent>
    </Card>
  )
}