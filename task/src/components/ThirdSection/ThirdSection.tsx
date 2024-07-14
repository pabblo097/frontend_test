import SectionHeading from '../SectionHeading';
import styles from './styles.module.scss';

function ThirdSection() {
   return (
      <section className={styles['third-section']}>
         <SectionHeading>
            {
               'BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE BO TOMASZ HAJTO POTRĄCIŁ STARĄ BABĘ NA PASACH I NIE PONIÓSŁ ZA TO ŻADNYCH KONSEKWENCJI.'
            }
         </SectionHeading>

         <div className={styles['third-section__content']}>
            {
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non varius velit. Nam mattis'
            }

            {
               'iaculis risus, pharetra euismod dolor vulputate ut. Aliquam dignissim felis sed egestas'
            }

            {
               'facilisis. Duis imperdiet finibus neque sit amet sagittis. Morbi sit amet tellus sed ligula'
            }

            {'dapibus dignissim sed quis orci. Interdum et malesuada fames ac ante ipsum primis in'}

            {
               'faucibus. Curabitur fringilla ante turpis, in fermentum ligula efficitur id. Suspendisse'
            }

            {
               'vitae finibus enim. Aliquam vel suscipit lorem. Fusce ex felis, tristique sit amet aliquam'
            }

            {'vel, fringilla ultricies metus.'}
         </div>
      </section>
   );
}

export default ThirdSection;
