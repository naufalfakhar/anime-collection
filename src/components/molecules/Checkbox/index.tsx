type Props = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

export default function Checkbox({ label, value }: Props) {
  return (
    <label>
      <input type='checkbox' value={value} />
      <span>{label}</span>
    </label>
  )
}
