import useAppContext from '../../hooks/useAppContext';
import SectionHeading from '../SectionHeading';
import { jsonDataCompareFn } from './helpers';
import styles from './styles.module.scss';

function ThirdSection() {
   const { content } = useAppContext();
   return (
      <section className={styles['third-section']}>
         <SectionHeading>
            {
               'BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE BO TOMASZ HAJTO POTRĄCIŁ STARĄ BABĘ NA PASACH I NIE PONIÓSŁ ZA TO ŻADNYCH KONSEKWENCJI.'
            }
         </SectionHeading>

         <div className={styles['third-section__content']}>
            {content.sort(jsonDataCompareFn).map((v) => (
               <p key={v.id}>{v.value}</p>
            ))}
         </div>
      </section>
   );
}

export default ThirdSection;
