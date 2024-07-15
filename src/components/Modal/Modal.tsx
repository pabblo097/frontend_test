import { useEffect, useRef } from 'react';

import { _t } from '../../labels/t';
import Button from '../Button';
import { ModalProps } from './constants';
import styles from './styles.module.scss';

function Modal({
   isModalOpened,
   onCloseModal,
   children,
   maxWidth = 400,
   ...restProps
}: ModalProps) {
   const modalRef = useRef<HTMLDialogElement>(null);

   useEffect(() => {
      if (modalRef.current === null) {
         return;
      }

      if (isModalOpened) {
         modalRef.current.showModal();
      } else {
         modalRef.current.close();
      }
   }, [isModalOpened]);

   return (
      <dialog
         ref={modalRef}
         className={styles.modal}
         style={{ maxWidth }}
         onCancel={onCloseModal}
         {...restProps}
      >
         <div className={styles.modal__content}>
            {children}

            <div className={styles.modal__footer}>
               <Button onClick={onCloseModal}>{_t('modal.okButtonLabel')}</Button>
            </div>
         </div>
      </dialog>
   );
}

export default Modal;
