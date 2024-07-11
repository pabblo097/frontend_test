import HtmlLogo from '../HtmlLogo';
import NavbarHeader from '../NavbarHeader';
import styles from './styles.module.scss';

function Navbar() {
   return (
      <nav className={styles.navbar}>
         <HtmlLogo />
         <NavbarHeader highlight="rekrutacyjne">Zadanie rekrutacyjne</NavbarHeader>
      </nav>
   );
}

export default Navbar;
