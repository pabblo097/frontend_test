import { useEffect, useRef } from 'react';

import Button from '../Button';
import { ModalProps } from './constants';
import styles from './styles.module.scss';

function Modal({ isModalOpened, onCloseModal, children, ...restProps }: ModalProps) {
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
         onCancel={onCloseModal}
         {...restProps}
      >
         <div className={styles.modal__content}>
            {children}

            <Button onClick={onCloseModal}>{'Ok'}</Button>
         </div>
      </dialog>
   );
}

export default Modal;
