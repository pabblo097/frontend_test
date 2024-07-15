import { useStorage } from '../../hooks/useStorage';
import { _t } from '../../labels/t';
import AddItemSection from './AddItemSection';
import ListItem from './ListItem';
import styles from './styles.module.scss';

function StorageModalLayout() {
   const { data } = useStorage();

   return (
      <div className={styles['storage-modal']}>
         <h2>{_t('storageModal.heading')}</h2>

         <AddItemSection />

         <ul className={styles['storage-modal__list']}>
            {data.map((item) => (
               <ListItem
                  key={item.id}
                  item={item}
               />
            ))}
         </ul>
      </div>
   );
}

export default StorageModalLayout;
