import { useState } from 'react';

import { useStorage } from '../../../hooks/useStorage';
import { _t } from '../../../labels/t';
import Button from '../../Button';
import styles from './styles.module.scss';

function AddItemSection() {
   const [textareaValue, setTextareaValue] = useState('');

   const { addItem } = useStorage();

   function handleAddItem() {
      if (!textareaValue.trim()) {
         alert('Input jest pusty!');
         return;
      }

      addItem(textareaValue.trim());
      setTextareaValue('');
   }

   return (
      <div className={styles['add-item']}>
         <textarea
            className={styles['add-item__textarea']}
            value={textareaValue}
            onChange={(event) => setTextareaValue(event.target.value)}
         ></textarea>

         <div className={styles['add-item__button-wrapper']}>
            <Button onClick={handleAddItem}>{_t('storageModal.addItem.addButtonLabel')}</Button>
         </div>
      </div>
   );
}

export default AddItemSection;
