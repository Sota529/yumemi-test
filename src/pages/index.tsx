import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { PrefectureInputGroup } from 'src/component/PrefectureInputGroup'
import { useEffect, useState } from 'react'
import { useAllPrefecture } from 'src/hooks/getAllPrefecture'

const Home: NextPage = () => {
  const { data: AllPrefectureData } = useAllPrefecture()
  const [isCheked, setIsCheked] = useState<boolean[]>([])
  useEffect(() => {
    setIsCheked(
      AllPrefectureData !== undefined
        ? AllPrefectureData?.result.map((d) => false)
        : []
    )
  }, [AllPrefectureData])

  if (AllPrefectureData === undefined) return <div>loading...</div>
  return (
    <div className={styles.container}>
      <Head>
        <title>都道府県別の総人口推移グラフ</title>
        <meta name="description" content="都道府県別の総人口推移グラフ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>都道府県別の総人口推移グラフ</h1>
      <p className={styles.subTitle}>都道府県</p>
      {isCheked?.length !== 0 ? (
        <PrefectureInputGroup
          data={AllPrefectureData}
          isCheked={isCheked}
          setIsCheked={setIsCheked}
        />
      ) : null}
    </div>
  )
}

export default Home
