import { useState } from 'react';

import { useStorage } from '../../../hooks/useStorage';
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
            <Button onClick={handleAddItem}>{'DODAJ'}</Button>
         </div>
      </div>
   );
}

export default AddItemSection;
