
import useAppContext from '../../hooks/useAppContext';
import RadioButton from '../RadioButton';
import SectionHeading from '../SectionHeading';
import styles from './styles.module.scss';

function FirstSection() {
   const { option, setOption } = useAppContext();

   return (
      <section className={styles['first-section']}>
         <SectionHeading>{'BLOK PIERWSZY'}</SectionHeading>

         <div className={styles['first-section__radio-group']}>
            <RadioButton
               checked={option === 0}
               name={'options'}
               onClick={() => setOption(0)}
            >
               {'Opcja pierwsza'}
            </RadioButton>

            <RadioButton
               checked={option === 1}
               name={'options'}
               onClick={() => setOption(1)}
            >
               {'Opcja druga'}
            </RadioButton>

            <RadioButton
               checked={option === 2}
               name={'options'}
               onClick={() => setOption(2)}
            >
               {'Opcja losowa'}
            </RadioButton>
         </div>
      </section>
   );
}

export default FirstSection;
