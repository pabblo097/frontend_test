import Button from '../Button';
import SectionHeading from '../SectionHeading';
import styles from './styles.module.scss';

function SecondSection() {
   return (
      <section className={styles['second-section']}>
         <SectionHeading>{'BLOK DRUGI'}</SectionHeading>

         <div className={styles['second-section__buttons-wrapper']}>
            <Button>{'ZASTĄP'}</Button>

            <Button>{'DOKLEJ'}</Button>
         </div>
      </section>
   );
}

export default SecondSection;
