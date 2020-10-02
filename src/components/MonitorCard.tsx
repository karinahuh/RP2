import React from 'react'
import { makeStyles, createStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import TeacherImg from '../assets/images/Carol.jpg'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';

type LessonCardProps = {
  name: string
  description: string
  link: string
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

export default function MonitorCard({ name, description, link }:LessonCardProps) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
       <CardHeader 
        avatar={
          <Avatar alt="Carol" src={TeacherImg} className={classes.imageSize} />
        }
        titleTypographyProps={{variant:'h4' }}
        title='Carol'
      />    
      <CardContent>
        <Typography variant='body2' component='p' align='center'>
         {description}<br />
         <Link href="https://facebook.com.br">
            {link}
          </Link>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button className={classes.button} variant='contained' color='secondary'>Ver aula</Button>
      </CardActions>
    </Card>
  )
}