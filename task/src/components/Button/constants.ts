import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'normal' | 'large';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
   icon?: IconDefinition;
   variant?: ButtonVariant;
};
