import fs from 'fs';
import matter from 'gray-matter';
import { useMediaQuery } from 'react-responsive'
import Layout from '../components/layout';
import { useState,useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Showdown from 'showdown';




export async function getStaticProps() {
    const fileName = fs.readFileSync(`about.md`, 'utf-8');
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
    const [colNum,setColNum]=useState(5);
    var converter = new Showdown.Converter()
    // showdown.Converter();
    const html = converter.makeHtml(content);
    useEffect(() => {
        // colNum=isDesktop?5:isLaptop?4:isTablet?3:isMobile?2:1;
        setColNum(isDesktop?5:isLaptop?4:isTablet?3:isMobile?2:1)
        console.log(isDesktop, isLaptop, isTablet, isMobile, colNum)
        
        return () => {
        
        };
    }, [isDesktop, isLaptop, isTablet, isMobile, colNum,]);
    console.log(isDesktop, isLaptop, isTablet, isMobile, colNum)

    return (
    <div>
    <Layout>
   
        <div className={colNum==5?styles.bigBlogPage:(colNum==4?styles.bigBlogPage:(colNum==3 ?styles.largeBlogPage:(colNum==2?styles.midBlogPage:styles.smallBlogPage)))} >
       
        <h1 style={{fontSize:'4rem'}}>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html
                //  md().render(content)
                }} />
        </div>
        
    </Layout>
    </div>
    );
}

