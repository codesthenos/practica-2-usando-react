function TextInput ({ title, type, id, name, placeholder }: { title: string, type: string, id: string, name: string, placeholder: string }) {
  return (
    <div className="text-input">
      <label htmlFor={id}>{title}</label>
      <input
        type={type}
        id={id}
        name={name}
        required
        aria-required="true"
        placeholder={placeholder}
      />
    </div>
  )
}
export default TextInput
