import { HeaderTextProps } from './constants';
import { getTextWithHighlight } from './helpers';
import styles from './styles.module.scss';

function HeaderText({ children, highlight }: HeaderTextProps) {
   return <span className={styles.header__text}>{getTextWithHighlight(children, highlight)}</span>;
}

export default HeaderText;
