import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Layout from '../components/layout';
import { Card, Button,Menu, List,Grid,Icon,Image,Input,} from 'semantic-ui-react'
// import { Grid, Image } from 'semantic-ui-react'
const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

export default function Gallery() {
  return (
    <Layout>
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Card
            image='https://images.unsplash.com/photo-1633608255627-3f5a396966b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1161&q=80'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={extra}
          />
            </Grid.Column>
            <Grid.Column>
            <Card
            image='https://images.unsplash.com/photo-1640762733501-dec6e420f403?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1157&q=80'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={extra}
          />
            </Grid.Column>
            <Grid.Column>
            <Card
            image='https://images.unsplash.com/photo-1637875891040-90677c6b3d37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={extra}
          />
          </Grid.Column>
          
        </Grid.Row>
    </Grid>
  </Layout>
  )
}
