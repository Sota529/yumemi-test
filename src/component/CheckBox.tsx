import { VFC } from 'react'
import styles from 'src/styles/CheckBox.module.css'

interface Props {
  value: string
  isChecked: boolean
  onChange: (e: boolean) => void
}

export const CheckBox: VFC<Props> = ({ value, isChecked, onChange }) => {
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
}
