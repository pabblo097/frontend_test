import HeaderText from '../HeaderText';
import HtmlLogo from '../HtmlLogo';
import styles from './styles.module.scss';

function Header() {
   return (
      <header className={styles.header}>
         <HtmlLogo />

         <div className={styles['header__text-wrapper']}>
            <HeaderText highlight={"rekrutacyjne"}>{"Zadanie rekrutacyjne"}</HeaderText>

            {/* TODO: show name after footer menu button clicked */}
         </div>
      </header>
   );
}

export default Header;
