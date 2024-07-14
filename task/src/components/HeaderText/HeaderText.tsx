import { HeaderTextProps } from './constants';
import { getTextWithHighlight } from './helpers';
import styles from './styles.module.scss';

function HeaderText({ children, highlight, fontWeight = 'normal' }: HeaderTextProps) {
   return (
      <span className={`${styles.header__text} ${styles[`header__text--${fontWeight}`]}`}>
         {getTextWithHighlight(children, highlight)}
      </span>
   );
}

export default HeaderText;
