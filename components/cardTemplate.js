import React from 'react';
import styles from '../styles/Home.module.css'
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'

import { Card, Button,Menu, List,Grid,Icon,Image as Imag,Input,} from 'semantic-ui-react'

export const CardTemplate = ({imgurl,likes,title,description,slug,date}) => {
    const isSmall = useMediaQuery({ query: '(max-width: 640px)' })
return       <Link href={`/${slug}`} passHref>
<div style={{marginBottom: '20px'}}>
        <Card className={`${styles.center} ${styles.img}`}>
            <Imag src={imgurl} wrapped ui={false}  />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>{date}</Card.Meta>
                <Card.Description>
            {description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                <Icon name='user' />
                {likes} Tags
                </a>
            </Card.Content>
        </Card>
    </div>
    </Link>
    ;
     {/* <Card  className={`${isSmall && styles.center} ${styles.img}`}
                image='https://images.unsplash.com/photo-1543699565-003b8adda5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              
                header='Elliot BakeSharingTiharrr'
                meta='Friend'
                description='is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                // extra={extra}
              /> */}

};

{/* <Card  className={`${isSmall && styles.center} ${styles.img}`}
image='https://images.unsplash.com/photo-1543699565-003b8adda5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

header='Elliot Baker'
meta='Friend'
description='is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
// extra={extra}
/> */}
