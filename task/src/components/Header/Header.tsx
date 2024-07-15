import useAppContext from '../../hooks/useAppContext';
import { _t } from '../../labels/t';
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
            <HeaderText highlight={_t('header.textHighlight')}>{_t('header.textLabel')}</HeaderText>

            {shouldDisplayName && (
               <HeaderText fontWeight={'lighter'}>{_t('header.name')}</HeaderText>
            )}
         </div>
      </header>
   );
}

export default Header;
