type HeaderTextFontWeight = 'normal' | 'lighter';

export interface HeaderTextProps {
   children: string;
   highlight?: string;
   fontWeight?: HeaderTextFontWeight;
}
