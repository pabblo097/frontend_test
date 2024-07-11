import { NavbarHeaderProps } from './constants';
import { getTextWithHighlight } from './helpers';
import styles from './styles.module.scss';

function NavbarHeader({ children, highlight }: NavbarHeaderProps) {
   return <h1 className={styles.navbar__header}>{getTextWithHighlight(children, highlight)}</h1>;
}

export default NavbarHeader;
