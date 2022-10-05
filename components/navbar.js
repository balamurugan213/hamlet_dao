import { Card, Button,Menu,Header, List ,Input,Segment} from 'semantic-ui-react'
import Link from 'next/link'
import {useState,useEffect} from 'react';
import { useRouter } from "next/router";
import { useMediaQuery } from 'react-responsive'



const Navbar = () => {
    const router = useRouter();
    console.log(router.asPath);
    const [activeItem,setActiveItem]=useState('Resources');
    const handleItemClick = (e, { name }) => setActiveItem(name);
    const isMobile = useMediaQuery({ query: '(min-width: 641px)' })
    
    useEffect(() => {
        if(router.asPath.match(/resources/)){
            setActiveItem('Resources');
        }
        else if(router.asPath.match(/about/)){
            setActiveItem('about');
        }
        else{
            setActiveItem('home');
        }
    },[activeItem, router.asPath]);

    return ( 
            <>
            <Menu inverted>
            <Menu.Menu position='left'>

            <Header style={{margin:'auto',color:'white', paddingLeft:'20px'}} as='h3' >
                <Link href='/' passHref >
                    <div style={{color:'white' ,cursor: 'pointer'}}>

                    HAMLET DAO
                    </div>
                </Link>
            </Header>
            {/* <h3 style={{margin:'auto', paddingLeft:'20px'}}>HAMLET DAO</h3> */}
            </Menu.Menu>
            {/* Search box */}
            <Menu.Menu position='right'>
            <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={handleItemClick}
            // color='yellow'
        >
                <Link href='/about'>About</Link>
            </Menu.Item>
            <Menu.Item
                name='Resources'
                active={activeItem === 'Resources'}
                onClick={handleItemClick}
                
            >
                    <Link href='/resources'>Resources</Link>
            </Menu.Item>
            {isMobile && (
                <Menu.Item>
                <Input icon='search' placeholder='Search...' />
                </Menu.Item>
            )}
            </Menu.Menu>
            </Menu>


          
            </>
    );
}

export default Navbar;