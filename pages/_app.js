// pages/_app.js
import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Points at /public/favicon.ico */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
