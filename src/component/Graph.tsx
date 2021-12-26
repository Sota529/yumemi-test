import { VFC } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { AllPrefectureType } from 'src/type'

interface Props {
  data: Array<{
    prefCode: number
    data: Array<{ year: number; value: number }>
  }>
  prefInfo: AllPrefectureType
}

export const Graph: VFC<Props> = ({ data, prefInfo }) => {
  const prefNameList = prefInfo.result.map((d) => {
    return d.prefName
  })

  const chartPlots = data.map((d) => {
    return {
      name: prefNameList[d.prefCode - 1],
      data: d.data.map((d) => {
        return d.value
      })
    }
  })
  const options = {
    title: {
      text: '都道府県別の総人口推移グラフ'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointInterval: 5,
        pointStart: 1960
      }
    },
    series: chartPlots
  }
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
