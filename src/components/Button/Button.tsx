import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ButtonProps } from './constants';
import styles from './styles.module.scss';

function Button({ children, icon, variant = 'normal', ...restProps }: ButtonProps) {
   return (
      <button
         className={`${styles.button} ${styles[`button--${variant}`]}`}
         {...restProps}
      >
         {children}

         {icon && <FontAwesomeIcon icon={icon} />}
      </button>
   );
}

export default Button;
