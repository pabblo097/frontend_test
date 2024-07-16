import { useStorage } from '../../../hooks/useStorage';
import { _t } from '../../../labels/t';
import Button from '../../Button';
import styles from './styles.module.scss';

function StorageModalHeader() {
   const { resetData } = useStorage();
   return (
      <div className={styles['storage-modal-header']}>
         <h2>{_t('storageModal.heading')}</h2>

         <Button onClick={resetData}>{_t('storageModal.resetButtonLabel')}</Button>
      </div>
   );
}

export default StorageModalHeader;
