import useAppContext from '../../hooks/useAppContext';
import Button from '../Button';
import SectionHeading from '../SectionHeading';
import styles from './styles.module.scss';

function SecondSection() {
   const { replaceContent, addContent } = useAppContext();

   return (
      <section className={styles['second-section']}>
         <SectionHeading>{'BLOK DRUGI'}</SectionHeading>

         <div className={styles['second-section__buttons-wrapper']}>
            <Button onClick={replaceContent}>{'ZASTĄP'}</Button>

            <Button onClick={addContent}>{'DOKLEJ'}</Button>
         </div>
      </section>
   );
}

export default SecondSection;
