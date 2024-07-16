import { useStorage } from '../../hooks/useStorage';
import AddItemSection from './AddItemSection';
import ListItem from './ListItem';
import StorageModalHeader from './StorageModalHeader';
import styles from './styles.module.scss';

function StorageModalLayout() {
   const { data } = useStorage();

   return (
      <div className={styles['storage-modal']}>
         <StorageModalHeader />

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
