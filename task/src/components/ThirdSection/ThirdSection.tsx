import useAppContext from '../../hooks/useAppContext';
import { _t } from '../../labels/t';
import SectionHeading from '../SectionHeading';
import { jsonDataCompareFn } from './helpers';
import styles from './styles.module.scss';

function ThirdSection() {
   const { content } = useAppContext();
   return (
      <section className={styles['third-section']}>
         <SectionHeading>{_t('thirdSection.heading')}</SectionHeading>

         <div className={styles['third-section__content']}>
            {content.sort(jsonDataCompareFn).map((v) => (
               <p key={v.id}>{v.value}</p>
            ))}
         </div>
      </section>
   );
}

export default ThirdSection;
