import styles from "./button.module.scss"
import classNames from "classnames";

function Button({children, mediator}) {

  return (
    <button className={classNames(styles.btn)} onClick={mediator.click}>{children}</button>
  )
}
export default Button;
