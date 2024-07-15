import useAppContext from '../../hooks/useAppContext';
import { _t } from '../../labels/t';
import Button from '../Button';
import SectionHeading from '../SectionHeading';
import styles from './styles.module.scss';

function SecondSection() {
   const { replaceContent, addContent } = useAppContext();

   return (
      <section className={styles['second-section']}>
         <SectionHeading>{_t('secondSection.heading')}</SectionHeading>

         <div className={styles['second-section__buttons-wrapper']}>
            <Button onClick={replaceContent}>{_t('secondSection.replaceButtonLabel')}</Button>

            <Button onClick={addContent}>{_t('secondSection.addButtonLabel')}</Button>
         </div>
      </section>
   );
}

export default SecondSection;
