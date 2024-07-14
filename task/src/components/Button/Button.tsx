import { ButtonProps } from './constants';
import styles from './styles.module.scss';

function Button({ children }: ButtonProps) {
   return <button className={styles.button}>{children}</button>;
}

export default Button;
