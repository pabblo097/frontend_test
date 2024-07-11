import { HeaderTextProps } from './constants';
import { getTextWithHighlight } from './helpers';
import styles from './styles.module.scss';

function HeaderText({ children, highlight }: HeaderTextProps) {
   return (
      <span className={styles.navbar__header}>{getTextWithHighlight(children, highlight)}</span>
   );
}

export default HeaderText;
