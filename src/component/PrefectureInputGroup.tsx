import { Dispatch, SetStateAction, VFC } from 'react'
import { resType } from 'src/type'
import { CheckBox } from './CheckBox'
import styles from 'src/styles/PrefectureInputGroup.module.css'

interface Props {
  data: resType
  isCheked: boolean[]
  setIsCheked: Dispatch<SetStateAction<boolean[]>>
}

export const PrefectureInputGroup: VFC<Props> = ({
  data,
  isCheked,
  setIsCheked
}) => {
  return (
    <div className={styles.container}>
      {data.result.map((d, i) => {
        return (
          <span className={styles.checkboxWrapper} key={d.prefCode}>
            <CheckBox
              value={d.prefName}
              isChecked={isCheked[i]}
              onChange={(e) => {
                setIsCheked([
                  ...isCheked.slice(0, i),
                  e,
                  ...isCheked.slice(i + 1)
                ])
              }}
            />
          </span>
        )
      })}
    </div>
  )
}
