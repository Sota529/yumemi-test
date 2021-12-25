import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import useSWR from 'swr'
import axios from 'axios'
import { resType } from 'src/type'

const fetcher = async (url: string): Promise<resType[]> => {
  const res = await axios.get(url, {
    headers: {
      'X-API-KEY':
        process.env.NEXT_PUBLIC_X_API_KEY !== undefined
          ? process.env.NEXT_PUBLIC_X_API_KEY
          : ''
    }
  })
  const data = (await res.data) as resType[]
  return data
}

const Home: NextPage = () => {
  const { data, error } = useSWR(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    fetcher
  )
  if (error !== undefined) return <div>failed to load</div>
  if (data === undefined) return <div>loading...</div>
  return (
    <div className={styles.container}>
      <Head>
        <title>都道府県別の総人口推移グラフ</title>
        <meta name="description" content="都道府県別の総人口推移グラフ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>都道府県別の総人口推移グラフ</h1>
      <p className={styles.subTitle}>都道府県</p>
    </div>
  )
}

export default Home
