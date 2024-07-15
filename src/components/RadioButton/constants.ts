import { InputHTMLAttributes } from 'react';

export type RadioButtonProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
   labelForm?: string;
};
