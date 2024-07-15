import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { MenuItemProps } from './constants';
import styles from './styles.module.scss';

function MenuItem({ children, className, ...restProps }: MenuItemProps) {
   return (
      <li
         className={`${styles['menu-item']} ${className}`}
         {...restProps}
      >
         <FontAwesomeIcon icon={faAngleRight} />

         {children}
      </li>
   );
}

export default MenuItem;
