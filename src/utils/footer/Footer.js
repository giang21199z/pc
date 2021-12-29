import styles from './footer.module.scss';
import classNames from 'classnames';

function Footer() {

  return (
    <div className={classNames(styles.footer)}>
      This is footer
    </div>
  )
}
export default Footer;
