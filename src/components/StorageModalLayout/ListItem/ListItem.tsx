import {
   faFloppyDisk,
   faPenToSquare,
   faTrash,
   faXmark
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import { useStorage } from '../../../hooks/useStorage';
import { _t } from '../../../labels/t';
import Button from '../../Button';
import { ListItemProps } from './constants';
import styles from './styles.module.scss';

function ListItem({ item }: ListItemProps) {
   const [isInEditMode, setIsInEditMode] = useState(false);
   const [textareaValue, setTextareaValue] = useState(item.value);

   const { editItem, removeItem } = useStorage();

   function handleSetInEditMode(value: boolean) {
      setIsInEditMode(value);
      setTextareaValue(item.value);
   }

   function handleEditItem() {
      if (!textareaValue.trim()) {
         alert('Input jest pusty!');
         return;
      }

      editItem(item.id, textareaValue);
      handleSetInEditMode(false);
   }

   return (
      <li className={styles['list-item']}>
         {isInEditMode ? (
            <>
               <div className={styles['list-item__content']}>
                  <textarea
                     className={styles['list-item__textarea']}
                     value={textareaValue}
                     onChange={(event) => setTextareaValue(event.target.value)}
                  ></textarea>
               </div>

               <div className={styles['list-item__buttons-wrapper']}>
                  <Button
                     aria-label={_t('storageModal.listItem.saveButtonLabel')}
                     icon={faFloppyDisk}
                     title={_t('storageModal.listItem.saveButtonLabel')}
                     variant={'small'}
                     onClick={handleEditItem}
                  ></Button>

                  <Button
                     aria-label={_t('storageModal.listItem.cancelButtonLabel')}
                     icon={faXmark}
                     title={_t('storageModal.listItem.cancelButtonLabel')}
                     variant={'small'}
                     onClick={() => handleSetInEditMode(false)}
                  ></Button>
               </div>
            </>
         ) : (
            <>
               <div className={styles['list-item__content']}>{item.value}</div>

               <div className={styles['list-item__buttons-wrapper']}>
                  <Button
                     aria-label={_t('storageModal.listItem.removeButtonLabel')}
                     icon={faTrash}
                     title={_t('storageModal.listItem.removeButtonLabel')}
                     variant={'small'}
                     onClick={() => removeItem(item.id)}
                  ></Button>

                  <Button
                     aria-label={_t('storageModal.listItem.editButtonLabel')}
                     icon={faPenToSquare}
                     title={_t('storageModal.listItem.editButtonLabel')}
                     variant={'small'}
                     onClick={() => handleSetInEditMode(true)}
                  ></Button>
               </div>
            </>
         )}
      </li>
   );
}

export default ListItem;
