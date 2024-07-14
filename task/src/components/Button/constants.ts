import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ButtonHTMLAttributes } from 'react';

export type ButtonSize = 'normal' | 'large';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
   icon?: IconDefinition;
   size?: ButtonSize;
};
