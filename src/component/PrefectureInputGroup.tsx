import { Dispatch, memo, SetStateAction, VFC } from 'react'
import { AllPrefectureType } from 'src/type'
import { CheckBox } from './CheckBox'
import styles from 'src/styles/PrefectureInputGroup.module.css'

interface Props {
  data: AllPrefectureType
  isCheked: boolean[]
  setIsCheked: Dispatch<SetStateAction<boolean[]>>
}

// eslint-disable-next-line react/display-name
export const PrefectureInputGroup: VFC<Props> = memo(
  ({ data, isCheked, setIsCheked }) => {
    return (
      <div>
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
)
