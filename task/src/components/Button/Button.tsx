import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ButtonProps } from './constants';
import styles from './styles.module.scss';

function Button({ children, icon, size = 'normal', ...restProps }: ButtonProps) {
   return (
      <button
         className={`${styles.button} ${styles[`button--${size}`]}`}
         {...restProps}
      >
         {children}

         {icon && <FontAwesomeIcon icon={icon} />}
      </button>
   );
}

export default Button;
