import styles from './checkbox.module.scss';
import classNames from 'classnames';
import { useState } from "react";

function Checkbox({mediator}) {

  const [inputValue, setInputValue] = useState();

  const handleChange = (e) => {
  }

  return (
    <label>
      <input
        type="checkbox"
        onChange={handleChange}
      />
    </label>
  )
}
export default Checkbox;