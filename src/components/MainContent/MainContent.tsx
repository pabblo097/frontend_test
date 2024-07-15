import FirstSection from '../FirstSection';
import SecondSection from '../SecondSection';
import ThirdSection from '../ThirdSection';
import styles from './styles.module.scss';

function MainContent() {
   return (
      <main className={styles['main-content']}>
         <div className={styles['main-content__sections-wrapper']}>
            <FirstSection />

            <SecondSection />
         </div>

         <ThirdSection />
      </main>
   );
}

export default MainContent;
