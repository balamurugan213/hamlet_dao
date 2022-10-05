import React from 'react';
import styles from '../styles/Home.module.css'
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'

import { Card, Button,Menu, List,Grid,Icon,Image as Imag,Input,} from 'semantic-ui-react'

export const CardTemplate = ({imgUrl,likes,title,description,slug,date}) => {
    const isSmall = useMediaQuery({ query: '(max-width: 640px)' })
return       <Link href={`/${slug}`} passHref>
<div style={{marginBottom: '20px'}}>
        <Card className={`${styles.center} ${styles.img}`}>
            <Imag src={imgUrl} wrapped ui={false}  />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>{date}</Card.Meta>
                <Card.Description>
            {description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                <Icon name='time' />
                {likes} min read
                </a>
            </Card.Content>
        </Card>
    </div>
    </Link>

};


