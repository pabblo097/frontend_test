import { _t } from '../../labels/t';
import styles from './styles.module.scss';

function CssIsAwesomeLogo() {
   return (
      <div className={styles['css-is-awesome-logo']}>
         <p>{_t('cssIsAwesome.css')}</p>

         <p>{_t('cssIsAwesome.is')}</p>

         <p>{_t('cssIsAwesome.awesome')}</p>
      </div>
   );
}

export default CssIsAwesomeLogo;
