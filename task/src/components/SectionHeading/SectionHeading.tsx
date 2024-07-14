import { SectionHeadingProps } from './constants';
import styles from './styles.module.scss';

function SectionHeading({ children }: SectionHeadingProps) {
   return <h2 className={styles['section-heading']}>{children}</h2>;
}

export default SectionHeading;
