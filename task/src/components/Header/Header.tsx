import useAppContext from '../../hooks/useAppContext';
import HeaderText from '../HeaderText';
import HtmlLogo from '../HtmlLogo';
import styles from './styles.module.scss';

function Header() {
   const { shouldDisplayName } = useAppContext();

   return (
      <header className={styles.header}>
         <nav>
            <HtmlLogo />
         </nav>

         <div className={styles['header__text-wrapper']}>
            <HeaderText highlight={'rekrutacyjne'}>{'Zadanie rekrutacyjne'}</HeaderText>

            {shouldDisplayName && (
               <HeaderText fontWeight={'lighter'}>{'Paweł Wiewióra'}</HeaderText>
            )}
         </div>
      </header>
   );
}

export default Header;
