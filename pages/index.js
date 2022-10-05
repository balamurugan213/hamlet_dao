// import styles form "../styles/globals.css"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout';
import Image from 'next/image'
import { Card, Button,Menu, List,Grid,Icon,Image as Imag,Input,} from 'semantic-ui-react'
import { useMediaQuery } from 'react-responsive'
import { CardTemplate } from '../components/cardTemplate';
import { useState,useEffect } from 'react';
import fs from 'fs-extra';
import matter from 'gray-matter';


export async function getStaticProps() {
  // Get all our posts
  const files = fs.readdirSync('post');
  const posts = files.map((fileName) => {
      const slug = fileName.replace('.md', '');
      const readFile = fs.readFileSync(`post/${fileName}`, 'utf-8');
      // const from = matter(a);
      // console.log(readFile)
      const { data: frontmatter } = matter(readFile);
      console.log(frontmatter)
      // console.log(a)

      return {
      slug,
      frontmatter,
      };

  });
  return {
      props: {
      posts,
      },
  };
}



export default function Home({posts}) {
    const isDesktop = useMediaQuery({ minWidth: 1420 })
    const isLaptop = useMediaQuery({ minWidth: 1224 })
    const isTablet =useMediaQuery({ minWidth: 820 })
    const isMobile = useMediaQuery({ minWidth: 641 })
    const isSmall = useMediaQuery({ query: '(max-width: 640px)' })
    const [colNum,setColNum]=useState(5);
    console.log(isDesktop, isLaptop, isTablet, isMobile, colNum)
    

    // setColNum(isDesktop?5:isLaptop?4:isTablet?3:isMobile?2:1)
    useEffect(() => {
      // colNum=isDesktop?5:isLaptop?4:isTablet?3:isMobile?2:1;
      setColNum(isDesktop?5:isLaptop?4:isTablet?3:isMobile?2:1)
      console.log(isDesktop, isLaptop, isTablet, isMobile, colNum)
      
      return () => {
        
      };
    }, [isDesktop, isLaptop, isTablet, isMobile, colNum,]);
    console.log(isDesktop, isLaptop, isTablet, isMobile, colNum)
    

    const data=posts.map(({ slug, frontmatter }) =>{
      return {img:frontmatter.image,title:frontmatter.title,description:frontmatter.description,date:frontmatter.date,slug:slug}
  
      } );
    console.log(colNum);

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
    
    <div className={styles.imgBox}>
    <Image src="/hamlet-01.svg" alt="VercelLogo" layout='fill'/>
    <h1>HAMLET DAO</h1>

    </div>
    <div className={colNum==5?styles.bigPage:(colNum==4?styles.page:(colNum==3 ?styles.page:(colNum==2?styles.medPage:styles.smallPage)))} >
    
    <Grid columns={colNum}  divided='vertically' centered padded className='aligned'>

    {Array.from(Array(colNum), (e, i) => {

    return  <Grid.Column>
    {data.map((d,index)=>{
      return (
        <>
         {index%colNum==i &&<CardTemplate likes={4} title={d.title} description={d.description} date={d.date} imgUrl={d.img} slug={d.slug}/>}
        </>
      
    )})}
</Grid.Column>
  })}
      </Grid>
    </div>
    
  </Layout>
  </div>
  )
}
