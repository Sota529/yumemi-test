import axios from 'axios'
import useSWR from 'swr'
import { AllPrefectureType } from 'src/type'

export const useAllPrefecture = (): { data?: AllPrefectureType } => {
  const { data, error } = useSWR(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    fetcher
  )
  if (error !== undefined) {
    console.error(error)
  }
  return { data: data }
}

const fetcher = async (url: string): Promise<AllPrefectureType> => {
  const res = await axios.get(url, {
    headers: {
      'X-API-KEY':
        process.env.NEXT_PUBLIC_X_API_KEY !== undefined
          ? process.env.NEXT_PUBLIC_X_API_KEY
          : ''
    }
  })
  const data = (await res.data) as AllPrefectureType
  return data
}
