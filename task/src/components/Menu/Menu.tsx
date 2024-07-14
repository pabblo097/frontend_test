import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';
import { MenuProps } from './constants';
import styles from './styles.module.scss';

function Menu({ children, buttonLabel }: MenuProps) {
   return (
      <div className={styles.menu}>
         <Button
            icon={faAngleUp}
            size={'large'}
         >
            {buttonLabel}
         </Button>

         <menu className={styles.menu__content}>{children}</menu>
      </div>
   );
}

export default Menu;
