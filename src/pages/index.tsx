import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { PrefectureInputGroup } from 'src/component/PrefectureInputGroup'
import { useEffect, useState } from 'react'
import { Graph } from 'src/component/Graph'
import { useAllPrefecture } from 'src/hooks/getAllPrefecture'
import axios from 'axios'
import { PrefectureInfoType } from 'src/type'

const getPrefInfo = async (
  id: number
): Promise<{
  message: null
  result: PrefectureInfoType
}> => {
  const res = await axios.get(
    `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${
      id + 1
    }`,
    {
      headers: {
        'X-API-KEY':
          process.env.NEXT_PUBLIC_X_API_KEY !== undefined
            ? process.env.NEXT_PUBLIC_X_API_KEY
            : ''
      }
    }
  )
  const data = (await res.data) as {
    message: null
    result: PrefectureInfoType
  }

  return data
}

const Home: NextPage = () => {
  const { data: AllPrefectureData } = useAllPrefecture()
  // const [prefCodeWithName, setPrefCodeWithName] = useState<{ number: string }>()
  const [isCheked, setIsCheked] = useState<boolean[]>([])
  const [prefInfos, setPrefInfos] = useState<
    Array<{
      prefCode: number
      data: Array<{
        year: number
        value: number
      }>
    }>
  >([])

  useEffect(() => {
    setIsCheked(
      AllPrefectureData !== undefined
        ? AllPrefectureData?.result.map((d) => false)
        : []
    )
  }, [AllPrefectureData])

  useEffect(() => {
    const changeState = async (): Promise<void> => {
      const results: Array<{
        prefCode: number
        data: Array<{
          year: number
          value: number
        }>
      }> = []
      for (let i = 0; i < isCheked.length; i++) {
        if (isCheked[i]) {
          const data = await getPrefInfo(i)
          const result = {
            prefCode: i + 1,
            data: data.result.data[0].data
          }
          results.push(result)
        }
      }
      setPrefInfos(results)
    }
    void changeState()
  }, [isCheked])

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
        <div className={styles.PrefectureInputGroupWrapper}>
          <PrefectureInputGroup
            data={AllPrefectureData}
            isCheked={isCheked}
            setIsCheked={setIsCheked}
          />
        </div>
      ) : null}
      <Graph data={prefInfos} prefInfo={AllPrefectureData} />
    </div>
  )
}

export default Home
