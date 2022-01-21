import { Card, Button,Menu, List ,Input,Segment} from 'semantic-ui-react'
import Link from 'next/link'
import {useState,useEffect} from 'react';
import { useRouter } from "next/router";


const Navbar = () => {
    const router = useRouter();
    console.log(router.asPath);
    const [activeItem,setActiveItem]=useState('gallery');
    const handleItemClick = (e, { name }) => setActiveItem(name);
    
    useEffect(() => {
        if(router.asPath.match(/gallery/)){
            setActiveItem('gallery');
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
            {/* Home */}
            <Menu.Item
                name='home'
                active={activeItem === 'homfe'}
                onClick={handleItemClick}
            >
                <Link href='/'>@!#</Link>
            </Menu.Item>
            
            {/* Search box */}
            <Menu.Menu position='right'>
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
            >
                <Link href='/'>Home</Link>
            </Menu.Item>
            <Menu.Item
            
            name='about'
            active={activeItem === 'about'}
            onClick={handleItemClick}
            // color='yellow'
        >
            <Link href='/about'>About</Link>
        </Menu.Item>
            <Menu.Item
                name='gallery'
                active={activeItem === 'gallery'}
                onClick={handleItemClick}
                
            >
                    <Link href='/gallery'>Gallery</Link>
            </Menu.Item>
                <Menu.Item>
                <Input icon='search' placeholder='Search...' />
                </Menu.Item>
            </Menu.Menu>
            </Menu>


            {/* <Menu stackable>
                <Menu.Item>
                <img src='/logo.png' />
                </Menu.Item>

                <Menu.Item
                name='features'
                active={activeItem === 'features'}
                onClick={handleItemClick}
                >
                Features
                </Menu.Item>

                <Menu.Item
                name='testimonials'
                active={activeItem === 'testimonials'}
                onClick={handleItemClick}
                >
                Testimonials
                </Menu.Item>

                <Menu.Item
                name='sign-in'
                active={activeItem === 'sign-in'}
                onClick={handleItemClick}
                >
                Sign-in
                </Menu.Item>
            </Menu> */}

            {/* <Segment>
            <img src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment> */}
            </>
    );
}

export default Navbar;