export interface AllPrefectureType {
  message: null
  result: Array<{ prefCode: number; prefName: string }>
}

export interface PrefectureInfoType {
  boundaryYear: number
  data: Array<{ label: string; data: Array<{ year: number; value: number }> }>
}
