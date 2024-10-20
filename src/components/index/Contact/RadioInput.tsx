function RadioInput ({ title, id, value, checked }: { title: string, id: string, value: string, checked: boolean }) {
  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <input
        type="radio"
        id={id}
        name="meeting-way"
        value={value}
        required
        aria-required="true"
        aria-label={`Met at ${value}`}
        checked={checked}
      />
    </div>
  )
}
export default RadioInput
