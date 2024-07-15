import { _t } from '../../labels/t';
import styles from './styles.module.scss';

function HeadingWithDivider() {
   return (
      <div className={styles['heading-with-divider']}>
         <h1 className={styles['heading-with-divider__text']}>{_t('headingWithDivider.label')}</h1>

         <span className={styles['heading-with-divider__divider']}></span>
      </div>
   );
}

export default HeadingWithDivider;
