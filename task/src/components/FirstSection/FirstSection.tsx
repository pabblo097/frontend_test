import { useState } from 'react';

import RadioButton from '../RadioButton';
import SectionHeading from '../SectionHeading';
import styles from './styles.module.scss';

function FirstSection() {
   const [checkedRadio, setCheckedRadio] = useState('opt1');

   return (
      <section className={styles['first-section']}>
         <SectionHeading>{'BLOK PIERWSZY'}</SectionHeading>

         <div className={styles['first-section__radio-group']}>
            <RadioButton
               checked={checkedRadio === 'opt1'}
               name={'foo'}
               value={'opt1'}
               onClick={() => setCheckedRadio('opt1')}
            >
               {'Opcja pierwsza'}
            </RadioButton>

            <RadioButton
               checked={checkedRadio === 'opt2'}
               name={'foo'}
               value={'opt2'}
               onClick={() => setCheckedRadio('opt2')}
            >
               {'Opcja druga'}
            </RadioButton>

            <RadioButton
               checked={checkedRadio === 'opt3'}
               name={'foo'}
               value={'opt3'}
               onClick={() => setCheckedRadio('opt3')}
            >
               {'Opcja losowa'}
            </RadioButton>
         </div>
      </section>
   );
}

export default FirstSection;
