import {useState} from "react";

export const useInput = (initState) => {
  const [value, setValue] = useState(initState)

  const onChange = (event) => {
    setValue(event.target.value.trim())
  }
  const clear = () => setValue('')

  return {
    inputValue: {
      onChange,
      value
    },
    value,
    clear,
    setValue,
  }
}