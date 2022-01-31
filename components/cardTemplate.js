import React from 'react';
import styles from '../styles/Home.module.css'
import { useMediaQuery } from 'react-responsive'

import { Card, Button,Menu, List,Grid,Icon,Image as Imag,Input,} from 'semantic-ui-react'

export const CardTemplate = ({imgurl,likes}) => {
    const isSmall = useMediaQuery({ query: '(max-width: 640px)' })
return <div style={{marginBottom: '20px'}}>
    <Card className={`${isSmall && styles.center} ${styles.img}`}>
        <Imag src={imgurl} wrapped ui={false}  />
        <Card.Content>
            <Card.Header>How Bitcoin works</Card.Header>
            <Card.Meta>16 May 2016</Card.Meta>
            <Card.Description>
            Daniel is a comedian living in Nashville. Daniel is a comedian living in Nashville. Daniel is a comedian living in Nashville. aniel is a comedian living in Nashville.
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
            <Icon name='user' />
            {likes} Friends
            </a>
        </Card.Content>
    </Card>
     {/* <Card  className={`${isSmall && styles.center} ${styles.img}`}
                image='https://images.unsplash.com/photo-1543699565-003b8adda5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              
                header='Elliot BakeSharingTiharrr'
                meta='Friend'
                description='is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                // extra={extra}
              /> */}
</div>;
};

{/* <Card  className={`${isSmall && styles.center} ${styles.img}`}
image='https://images.unsplash.com/photo-1543699565-003b8adda5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

header='Elliot Baker'
meta='Friend'
description='is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
// extra={extra}
/> */}
