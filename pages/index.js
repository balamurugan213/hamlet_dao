// import styles form "../styles/globals.css"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout';
import Image from 'next/image'
import { Card, Button,Menu, List,Grid,Icon,Image as Imag,Input,} from 'semantic-ui-react'
import { useMediaQuery } from 'react-responsive'
import { CardTemplate } from '../components/cardTemplate';
import { useState,useEffect } from 'react';

const extra = (
  <div>
  <a>
    <Icon name='user' />
    16 Friends
  </a>
  <a>
    <Icon name='user' />
    16 Friends
  </a>
  </div>
  
  
)
export default function Home() {
    const isDesktop = useMediaQuery({ minWidth: 1420 })
    const isLaptop = useMediaQuery({ minWidth: 1224 })
    const isTablet =useMediaQuery({ minWidth: 820 })
    const isMobile = useMediaQuery({ minWidth: 641 })
    const isSmall = useMediaQuery({ query: '(max-width: 640px)' })
    const [colnum,setColnum]=useState(5);
    console.log(isDesktop, isLaptop, isTablet, isMobile, colnum)
    

    // setColnum(isDesktop?5:isLaptop?4:isTablet?3:isMobile?2:1)
    useEffect(() => {
      // colnum=isDesktop?5:isLaptop?4:isTablet?3:isMobile?2:1;
      setColnum(isDesktop?5:isLaptop?4:isTablet?3:isMobile?2:1)
      console.log(isDesktop, isLaptop, isTablet, isMobile, colnum)
      
      return () => {
        
      };
    }, [isDesktop, isLaptop, isTablet, isMobile, colnum,]);
    console.log(isDesktop, isLaptop, isTablet, isMobile, colnum)
    

    const data=[
      {img:'https://images.unsplash.com/photo-1543699565-003b8adda5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
      {img:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3624cc128171271.6167a1a6ac0a6.gif'},
      {img:'https://react.semantic-ui.com/images/avatar/large/daniel.jpg'},
      {img:'https://images.unsplash.com/photo-1543699565-003b8adda5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
      {img:'https://react.semantic-ui.com/images/avatar/large/daniel.jpg'},
      {img:'https://images.unsplash.com/photo-1543699565-003b8adda5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
      {img:'https://media.nature.com/lw800/magazine-assets/d41586-021-01642-3/d41586-021-01642-3_19268462.jpg'},
      {img:'https://images.unsplash.com/photo-1543699565-003b8adda5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
      {img:'https://react.semantic-ui.com/images/avatar/large/daniel.jpg'},
      {img:'https://images.unsplash.com/photo-1543699565-003b8adda5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
      {img:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3624cc128171271.6167a1a6ac0a6.gif'},
      {img:'https://react.semantic-ui.com/images/avatar/large/daniel.jpg'},
      {img:'https://images.unsplash.com/photo-1543699565-003b8adda5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
      {img:'https://react.semantic-ui.com/images/avatar/large/daniel.jpg'},
      {img:'https://images.unsplash.com/photo-1543699565-003b8adda5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
      {img:'https://media.nature.com/lw800/magazine-assets/d41586-021-01642-3/d41586-021-01642-3_19268462.jpg'},
      {img:'https://images.unsplash.com/photo-1543699565-003b8adda5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
    ]
    console.log(colnum);

  return (
    <div >
      <Head>
          <link
            rel="preload"
            href="../public/ocr-a/OCR-A.ttf"
            as="font"
            crossOrigin=""
          /> 
        </Head>
  <Layout>
    {/* <h3>ss</h3> */}
    
    <div className={styles.imgbox}>
    <Image src="/hamlet-01.svg" alt="VercelLogo" layout='fill'/>
    <h1>HAMLET DAO</h1>

    </div>
    {
      console.log(isDesktop, isLaptop, isTablet, isMobile, colnum)
      }
      {
        console.log(isDesktop?"styles.page" :isLaptop ?"styles.page":isTablet?"styles.medpage":"styles.smallpage")
      }
    <div className={colnum==5?styles.bigpage:(colnum==4?styles.page:(colnum==3 ?styles.page:(colnum==2?styles.medpage:styles.smallpage)))} >
    
    <Grid columns={colnum}  divided='vertically' centered padded className='aligned'>

    {Array.from(Array(colnum), (e, i) => {

    return  <Grid.Column>
    {data.map((d,index)=>{
      return (
        <>
        {index%colnum==i &&<CardTemplate likes={4} imgurl={d.img}/>}
        </>
      
    )})}
</Grid.Column>
  })}
    {/* <Grid.Column>
        <CardTemplate imgurl={'https://images.unsplash.com/photo-1543699565-003b8adda5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}></CardTemplate>
    </Grid.Column>
    <Grid.Column>
        <CardTemplate imgurl={'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}></CardTemplate>
    </Grid.Column>
    <Grid.Column>
        <CardTemplate imgurl={'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3624cc128171271.6167a1a6ac0a6.gif'}></CardTemplate>
    </Grid.Column>
    <Grid.Column>
        <CardTemplate imgurl={'https://react.semantic-ui.com/images/avatar/large/daniel.jpg'}></CardTemplate>
    </Grid.Column>
    <Grid.Column>
        <CardTemplate imgurl={'https://images.unsplash.com/photo-1543699565-003b8adda5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}></CardTemplate>
    </Grid.Column> */}
    {/* <Grid.Column>
      
              <Card  className={`${isSmall && styles.center} ${styles.img}`}
                image='https://images.unsplash.com/photo-1543699565-003b8adda5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              
                header='Elliot Baker'
                meta='Friend'
                description='is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                // extra={extra}
              />
              <Card>
                  <Imag className={styles.img}  src='https://media.nature.com/lw800/magazine-assets/d41586-021-01642-3/d41586-021-01642-3_19268462.jpg' wrapped ui={false}  />
                  <Card.Content>
                    <Card.Header>Daniel</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>
                      Daniel is a comedian living in Nashville.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='user' />
                      10 Friends
                    </a>
                  </Card.Content>
                </Card>
          </Grid.Column>
          <Grid.Column>
              
              <Card className={styles.img}>
                  <Imag  src='https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' wrapped ui={false}  />
                  <Card.Content>
                    <Card.Header>Daniel</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>
                      Daniel is a comedian living in Nashville.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='user' />
                      10 Friends
                    </a>
                  </Card.Content>
                </Card>
                <Card  className={styles.img}>
              <Imag  src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3624cc128171271.6167a1a6ac0a6.gif' wrapped ui={false}  />
              <Card.Content>
                <Card.Header>Daniel</Card.Header>
                <Card.Meta>Joined in 2016</Card.Meta>
                <Card.Description>
                  Daniel is a Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat Elliot comedian living in Nashville.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  10 Friends
                </a>
              </Card.Content>
            </Card>
              </Grid.Column>
              <Grid.Column>
              
              <Card>
                  <Imag  src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false}  />
                  <Card.Content>
                    <Card.Header>Daniel</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>
                      Daniel is a comedian living in Nashville.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='user' />
                      10 Friends
                    </a>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
              
              <Card>
                  <Imag  src='https://image.binance.vision/uploads-original/b1773fc722a54746b2000cc38b855970.png' wrapped ui={false}  />
                  <Card.Content>
                    <Card.Header>Daniel</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>
                      Daniel is a comedian living in Nashville.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='user' />
                      10 Friends
                    </a>
                  </Card.Content>
                </Card>
              </Grid.Column> */}
        {/* <Grid.Row>
          <Grid.Column>
              <Card
                image='https://images.unsplash.com/photo-1543699565-003b8adda5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
          
              />
              
          </Grid.Column>
          <Grid.Column>
              <Card
                image='https://images.unsplash.com/photo-1543699565-003b8adda5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
          
              />
              
          </Grid.Column>
          <Grid.Column>
              
          <Card>
              <Imag  src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3624cc128171271.6167a1a6ac0a6.gif' wrapped ui={false}  />
              <Card.Content>
                <Card.Header>Daniel</Card.Header>
                <Card.Meta>Joined in 2016</Card.Meta>
                <Card.Description>
                  Daniel is a comedian living in Nashville.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  10 Friends
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
              <Card
                image='https://images.unsplash.com/photo-1543699565-003b8adda5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
          
              />
              
          </Grid.Column>
        </Grid.Row> */}
      </Grid>
    </div>
    
  </Layout>
  </div>
  )
}
