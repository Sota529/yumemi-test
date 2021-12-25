import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'src/styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="next app template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Hello Wolrd</p>
    </div>
  )
}

export default Home
