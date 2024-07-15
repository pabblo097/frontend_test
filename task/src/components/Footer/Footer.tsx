import useAppContext from '../../hooks/useAppContext';
import useModal from '../../hooks/useModal';
import CssIsAwesomeLogo from '../CssIsAwesomeLogo';
import Menu, { MenuItem } from '../Menu';
import NabthatLogo from '../NabthatLogo';
import styles from './styles.module.scss';

function Footer() {
   const { setShouldDisplayName, reset } = useAppContext();
   const { setIsStorageModalOpened } = useModal();

   return (
      <footer className={styles.footer}>
         <div className={styles['footer__first-section']}>
            <CssIsAwesomeLogo />
         </div>

         <div className={styles['footer__second-section']}>
            <NabthatLogo />
         </div>

         <div className={styles['footer__third-section']}>
            <Menu buttonLabel={'POKAŻ'}>
               <MenuItem onClick={reset}>{'ZRESETUJ USTAWIENIA'}</MenuItem>

               <MenuItem onClick={() => setShouldDisplayName(true)}>
                  {'POKAŻ DANE OSOBOWE'}
               </MenuItem>

               <MenuItem onClick={() => setIsStorageModalOpened(true)}>
                  {'EDYTUJ LOCAL STORAGE'}
               </MenuItem>
            </Menu>
         </div>
      </footer>
   );
}

export default Footer;
