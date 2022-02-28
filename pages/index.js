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

export async function getStaticProps() {
  // Get all our posts
  const files = fs.readdirSync('post');
  const posts = files.map((fileName) => {
      // console.log(fileName)
      const a="---\ntitle: Hello\nslug: home\n---\n<h1>Hello world!</h1>"

      const slug = fileName.replace('.md', '');
      const readFile = fs.readFileSync(`post/${fileName}`, 'utf-8');
      // const from = matter(a);
      console.log(readFile)
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
    

    const data=posts.map(({ slug, frontmatter }) =>{
      return {img:frontmatter.image,title:frontmatter.title,description:frontmatter.description,date:frontmatter.date,slug:slug}
  
      } );
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
         {index%colnum==i &&<CardTemplate likes={4} title={d.title} description={d.description} date={d.date} imgurl={d.img} slug={d.slug}/>}
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
