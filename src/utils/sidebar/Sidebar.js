import styles from './sidebar.module.scss';
import classNames from 'classnames';

function Sidebar() {
  return (
    <div className={classNames(styles.sidebar)}>
      This is header
    </div>
  )
}
export default Sidebar;
