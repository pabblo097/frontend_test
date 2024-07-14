import CssIsAwesomeLogo from '../CssIsAwesomeLogo';
import Menu, { MenuItem } from '../Menu';
import styles from './styles.module.scss';

function Footer() {
   return (
      <footer className={styles.footer}>
         <CssIsAwesomeLogo />

         {/* <div>{'nabthat'}</div> */}

         <Menu buttonLabel={'POKAŻ'}>
            <MenuItem>{'ZRESETUJ USTAWIENIA'}</MenuItem>

            <MenuItem>{'POKAŻ DANE OSOBOWE'}</MenuItem>
         </Menu>
      </footer>
   );
}

export default Footer;
