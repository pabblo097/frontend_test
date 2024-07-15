import { _t } from '../../labels/t';
import styles from './styles.module.scss';

function NabthatLogo() {
   return (
      <div className={styles['nabthat-logo']}>
         <span className={styles['nabthat-logo__content']}>{_t('nabthatLogo.label')}</span>

         <span className={styles['nabthat-logo__line']}></span>
      </div>
   );
}

export default NabthatLogo;
