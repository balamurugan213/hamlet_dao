import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import { Container, Header } from 'semantic-ui-react'
import { useMediaQuery } from 'react-responsive'
import Layout from '../../components/layout';
import { useState,useEffect } from 'react';
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
// import '../../styles/globals.css'



export async function getStaticPaths() {
    // Retrieve all our slugs
    const files = fs.readdirSync('post');

    const paths = files.map((fileName) => ({
        params: {
        slug: fileName.replace('.md', ''),
        },
    }));
    return {
        paths,
        fallback: false,
};
}
export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`post/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
    props: {
        frontmatter,
        content,
    },
    };
}

export default function PostPage({ frontmatter, content }) {
    const isDesktop = useMediaQuery({ minWidth: 1420 })
    const isLaptop = useMediaQuery({ minWidth: 1224 })
    const isTablet =useMediaQuery({ minWidth: 820 })
    const isMobile = useMediaQuery({ minWidth: 641 })
    const isSmall = useMediaQuery({ query: '(max-width: 640px)' })
    const [colnum,setColnum]=useState(5);

    useEffect(() => {
        // colnum=isDesktop?5:isLaptop?4:isTablet?3:isMobile?2:1;
        setColnum(isDesktop?5:isLaptop?4:isTablet?3:isMobile?2:1)
        console.log(isDesktop, isLaptop, isTablet, isMobile, colnum)
        
        return () => {
        
        };
    }, [isDesktop, isLaptop, isTablet, isMobile, colnum,]);
    console.log(isDesktop, isLaptop, isTablet, isMobile, colnum)

    return (
    <div>

    <Layout>
   
        <div className={colnum==5?styles.bigBlogPage:(colnum==4?styles.bigBlogPage:(colnum==3 ?styles.largeBlogPage:(colnum==2?styles.midBlogPage:styles.smallBlogPage)))} >
        <div className='bannerImg'>
        </div>
        {/* <img src={frontmatter.bannerImage} alt="VercelLogo"/> */}
        <h1 style={{fontSize:'4rem'}}>{frontmatter.title}</h1>
            {/* <Container text textAlign='center' className='red'> */}

            <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
            {/* </Container> */}
        </div>
        
    </Layout>
    </div>
    );
}
