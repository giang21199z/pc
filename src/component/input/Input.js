import { useState } from "react";

function Input({mediator}) {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <input
      value={inputValue}
      onChange={handleChange}
    />
  )
}
export default Input;
