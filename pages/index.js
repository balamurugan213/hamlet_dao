// import styles form "../styles/globals.css"
import Head from 'next/head'
import Layout from '../components/layout';

export default function Home() {
  return (
    <div className="">
      <Head>
          <link
            rel="preload"
            href="../public/ocr-a/OCR-A.ttf"
            as="font"
            crossOrigin=""
          /> 
        </Head>
  <Layout>
    <h1>Hamlet</h1>
    {/* <h3>ss</h3> */}
  </Layout>
  </div>
  )
}
