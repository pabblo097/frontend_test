import { DialogHTMLAttributes } from 'react';

export type ModalProps = DialogHTMLAttributes<HTMLDialogElement> & {
   isModalOpened: boolean;
   onCloseModal: () => void;
   maxWidth?: number;
};
