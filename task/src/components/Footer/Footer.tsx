import useAppContext from '../../hooks/useAppContext';
import useModal from '../../hooks/useModal';
import { _t } from '../../labels/t';
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
            <Menu buttonLabel={_t('footer.menuLabel')}>
               <MenuItem onClick={reset}>{_t('footer.menu.resetLabel')}</MenuItem>

               <MenuItem onClick={() => setShouldDisplayName(true)}>
                  {_t('footer.menu.showPersonalInfoLabel')}
               </MenuItem>

               <MenuItem onClick={() => setIsStorageModalOpened(true)}>
                  {_t('footer.menu.editStorageLabel')}
               </MenuItem>
            </Menu>
         </div>
      </footer>
   );
}

export default Footer;
