import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';
import { MenuProps } from './constants';
import styles from './styles.module.scss';

function Menu({ children, buttonLabel }: MenuProps) {
   return (
      <div className={styles.menu}>
         <Button
            icon={faAngleUp}
            variant={'large'}
         >
            {buttonLabel}
         </Button>

         <nav>
            <menu className={styles.menu__content}>{children}</menu>
         </nav>
      </div>
   );
}

export default Menu;
