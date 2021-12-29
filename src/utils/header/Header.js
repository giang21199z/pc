import styles from './header.module.scss';
import classNames from 'classnames';

function Header() {
  return (
    <div className={classNames(styles.header)}>
      This is header
    </div>
  )
}
export default Header;
