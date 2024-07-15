import { RadioButtonProps } from './constants';
import styles from './styles.module.scss';

function RadioButton({ children, labelForm, ...restProps }: RadioButtonProps) {
   return (
      <div className={styles['radio-button']}>
         <label
            className={styles['radio-button__label']}
            form={labelForm}
         >
            <input
               className={styles['radio-button__input']}
               type={'radio'}
               {...restProps}
            />

            {children}
         </label>
      </div>
   );
}

export default RadioButton;
