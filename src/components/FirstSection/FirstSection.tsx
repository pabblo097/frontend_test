import useAppContext from '../../hooks/useAppContext';
import { _t } from '../../labels/t';
import RadioButton from '../RadioButton';
import SectionHeading from '../SectionHeading';
import styles from './styles.module.scss';

function FirstSection() {
   const { option, setOption } = useAppContext();

   return (
      <section className={styles['first-section']}>
         <SectionHeading>{_t('firstSection.heading')}</SectionHeading>

         <div className={styles['first-section__radio-group']}>
            <RadioButton
               checked={option === 0}
               name={_t('firstSection.radioButtonsName')}
               onClick={() => setOption(0)}
            >
               {_t('firstSection.firstRadioLabel')}
            </RadioButton>

            <RadioButton
               checked={option === 1}
               name={_t('firstSection.radioButtonsName')}
               onClick={() => setOption(1)}
            >
               {_t('firstSection.secondRadioLabel')}
            </RadioButton>

            <RadioButton
               checked={option === 2}
               name={_t('firstSection.radioButtonsName')}
               onClick={() => setOption(2)}
            >
               {_t('firstSection.thirdRadioLabel')}
            </RadioButton>
         </div>
      </section>
   );
}

export default FirstSection;
