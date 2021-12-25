import { memo, VFC } from 'react'
import styles from 'src/styles/CheckBox.module.css'

interface Props {
  value: string
  isChecked: boolean
  onChange: (e: boolean) => void
}

// eslint-disable-next-line react/display-name
export const CheckBox: VFC<Props> = memo(({ value, isChecked, onChange }) => {
  return (
    <label id={value}>
      <input
        id={value}
        type="checkbox"
        checked={isChecked}
        onChange={() => onChange(!isChecked)}
      />
      <span className={styles.text}>{value}</span>
    </label>
  )
})
